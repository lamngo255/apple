const linkingTarget = 'https://test.apple.com';

// variables accessible in project src code
const env = ['CDN'];
process.env.CDN = '/cdn/assets';

module.exports = {
  linkingTarget,
  env,
};
