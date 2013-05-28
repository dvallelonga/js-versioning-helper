var data = {
  version: "v0.0.20",
  key: process.env.AWS_ACCESS_KEY_ID,
  secret: process.env.AWS_SECRET_ACCESS_KEY,
  bucket: 'test',
  access: 'public-read',
  filename: 'test.js', //name of the file you want to link to in the html
  source: 'src/*.js'
};
module.exports = data;