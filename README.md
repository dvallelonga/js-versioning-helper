# js-versioning-helper

A node module to help you upload versioned client side javascript libraries to s3. Most of the leg work is done
by grunt and the grunt-s3 plugin. These are both dependencies of this module.

You need to set AWS evnvrionment variables (probably in your .profile or .bashrc for example).

    export AWS_ACCESS_KEY_ID=your_key_id
    export AWS_SECRET_ACCESS_KEY=your_seceret_key

Better instructions coming soon.

    var data = {
      version: "v0.0.1",
      key: process.env.AWS_ACCESS_KEY_ID,
      secret: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 'your-bucket',
      access: 'public-read',
      filename: 'test.js',
      source: 'src/',
      versionArray: []
    };

Versioning is very strict. You must use the vMajor.Minor.Revision method of versioning.