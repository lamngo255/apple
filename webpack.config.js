const path = require('path');

const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const extendedConfig = require('./webpack.config.extend');

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';
const sourceMap = !isProd;

const fromSrc = (dir) => path.join(__dirname, 'src', dir);
const assetsPrefix = 'static';

const envNames = ['NODE_ENV'].concat(extendedConfig.env);
const envObject = envNames.reduce(
  (acc, key) => ({ ...acc, [key]: JSON.stringify(process.env[key]) }),
  {},
);
const sassEnvs = extendedConfig.env
  .map((e) => `$${e.toLowerCase()}: ${JSON.stringify(process.env[e])};`)
  .concat(`$locales: ${extendedConfig.locales};`)
  .join('');

const config = {
  mode: isProd ? 'production' : 'development',
  entry: fromSrc('main.js'),
  devtool: isProd ? false : 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${assetsPrefix}/js/${
      isProd ? '[name].[contenthash].js' : '[name].js'
    }`,
    publicPath: '/',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: { '@': fromSrc('.') },
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [fromSrc('.')],
        options: { emitWarnings: true },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          outputPath: 'images',
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          outputPath: 'fonts',
        },
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          outputPath: 'audio',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                /* eslint-disable global-require */
                require('postcss-import')(),
                require('autoprefixer')(),
                /* eslint-enable global-require */
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap,
              data: `
                @import './src/styles/variables.scss';
                @import './src/styles/mixins.scss';
                ${sassEnvs}
              `,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new DefinePlugin({ 'process.env': envObject }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
      inject: true,
      minify: isProd
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
          }
        : false,
    }),
  ],

  devServer: {
    historyApiFallback: true,
    overlay: { errors: true },
    proxy:
      nodeEnv === 'linking'
        ? {
            '**/api/**': {
              target: extendedConfig.linkingTarget,
              changeOrigin: true,
            },
          }
        : {},
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

if (isProd) {
  config.plugins.unshift(new CleanWebpackPlugin(['dist']));
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: `${assetsPrefix}/css/[name].[contenthash].css`,
      chunkFilename: `${assetsPrefix}/css/[id].[contenthash].css`,
    }),
  );

  config.optimization.minimizer = [
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin(),
  ];
}

module.exports = config;
