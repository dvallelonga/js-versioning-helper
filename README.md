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

----------------------------------------

The MIT License (MIT)

Copyright (c) 2013 Richard Torruellas III

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN

