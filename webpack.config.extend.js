const linkingTarget = 'https://test.apple.com';

// variables accessible in project src code
const env = ['CDN'];
process.env.CDN = '/cdn/assets';
// process.env.CDN = 'https://do2y4hg02hvd7.cloudfront.net/assets';

module.exports = {
  linkingTarget,
  env,
};
