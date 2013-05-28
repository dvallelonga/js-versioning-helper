/**
 * This is an example
 *
 */
var prodSettings = require('./settings/prodSettings');

module.exports = function(grunt) {

  var s3Settings = prodSettings('libConfig');

  console.log(s3Settings);
  grunt.initConfig({
    s3: s3Settings
  });
  grunt.loadNpmTasks('grunt-s3');
  grunt.registerTask('default', ['s3']);
};
