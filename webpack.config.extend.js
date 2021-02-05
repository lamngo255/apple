const linkingTarget = 'https://test.apple.com';

// variables accessible in project src code
const env = ['REGION', 'CDN', 'LANG_MAP', 'LOCALE', 'TRANSIFY_ID'];
process.env.CDN = '/cdn/assets';

module.exports = {
  linkingTarget,
  env,
};
