var data = {
  version: "v0.0.6",
  key: process.env.AWS_ACCESS_KEY_ID,
  secret: process.env.AWS_SECRET_ACCESS_KEY,
  bucket: 'test',
  access: 'public-read',
  filename: 'test.js',
  source: 'src/'
};
module.exports = data;