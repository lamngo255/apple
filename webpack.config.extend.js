const linkingTarget = 'https://test.apple.com';

// variables accessible in project src code
const CDN_LINK = 'https://do2y4hg02hvd7.cloudfront.net/assets';
const env = ['CDN'];

process.env.CDN = process.env.CDN || CDN_LINK;

module.exports = {
  linkingTarget,
  env,
};
