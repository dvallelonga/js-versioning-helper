# js-versioning-helper

A node module to help you upload versioned client side javascript libraries to s3. Most of the leg work is done
by grunt and the grunt-s3 plugin. These are both dependencies of this module.

You need to set AWS evnvrionment variables (probably in your .profile or .bashrc for example).

If you want to run different configurations for different enviroments, checkout how
[grunt.option](https://github.com/gruntjs/grunt/wiki/grunt.option) works.

    export AWS_ACCESS_KEY_ID=your_key_id
    export AWS_SECRET_ACCESS_KEY=your_seceret_key

##Install & Dependencies

###package.json

    "dependencies": {
        "js-versioning-helper": "latest",
        "grunt": "~0.4.0",
        "grunt-s3": "0.2.0-alpha.1"
    }

npm install

###versioning.js

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


###Gruntfile.js

    var prodSettings = require('js-versioning-helper');
    module.exports = function(grunt) {
      var s3Settings = prodSettings('versioning'); //this is the name of your versioning config file
      grunt.initConfig({
        s3: s3Settings
      });
      grunt.loadNpmTasks('grunt-s3');
      grunt.registerTask('default', ['s3']);
    };

Type grunt.

Versioning is very strict. You must use the vMajor.Minor.Revision method of versioning.
