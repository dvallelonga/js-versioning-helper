var fs = require('fs');
var jsVersioningHelper = function(configurationFile){
  var data = require('../'+configurationFile);
  var template = function(major, minor, revision){
    var html =
      '<html>\n' +
        '<body>\n' +
        '<h1>' + data.filename + '</h1>\n'+
        '<ul>\n' +
        '<li>Rolling Major Release: <a href="http://'+data.bucket+'.s3.amazonaws.com'+'/'+major+'/'+data.filename+'">'+major+'</a></li>\n'+
        '<li>Rolling Minor Release: <a href="http://'+data.bucket+'.s3.amazonaws.com'+'/'+major+'.'+minor+'/'+data.filename+'">'+major+'.'+minor+'</a></li>\n'+
        '<li>Current Release: <a href="http://'+data.bucket+'.s3.amazonaws.com'+'/'+major+'.'+minor+'.'+revision+'/'+data.filename+'">'+major+'.'+minor+'.'+revision+'</a></li>\n'+
        '</ul>\n' +
        '</body>\n' +
        '</html>\n';
    return html;
  };
  var writeTemplateFile = function(template){
    var t = template;
    var setLocation = 'settings/index.html';
    fs.writeFile(setLocation, t);
    data["webPage"] = setLocation;
    data["webPageDestination"] = 'web/index.html'
  };
  var init = function(){
    var major,minor,revision;
    var vArray = [];
    var splitVersion = data.version.split('.');
    for (var i=0; splitVersion.length>i; i++){
      vArray.push(splitVersion[i]);
    }
    data["versionArray"] = vArray;
    major = data.versionArray[0];
    minor = data.versionArray[1];
    revision = data.versionArray[2];
    writeTemplateFile(template(major, minor, revision));
  };
  init();
  var s3Config = {
    options: {
      key: data.key,
      secret: data.secret,
      bucket: data.bucket,
      access: data.access
    },
    dev: {
      options: {
        encodePaths: true,
        maxOperations: 20
      },
      upload: [
        {
          src: data.webPage,
          dest: data.webPageDestination,
          gzip: true
        },
        {
          src: data.source+data.filename,
          dest: data.versionArray[0]+'/'+data.filename,
          gzip: true
        },
        {
          src: data.source+data.filename,
          dest: data.versionArray[0]+'.'+data.versionArray[1]+'/'+data.filename,
          gzip: true
        },
        {
          src: data.source+data.filename,
          dest: data.versionArray[0]+'.'+data.versionArray[1]+'.'+data.versionArray[2]+'/'+data.filename,
          gzip: true
        }
      ]
    }
  };
  return s3Config;
};
module.exports = jsVersioningHelper;