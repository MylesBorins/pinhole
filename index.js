// native modules
var fs = require('fs');
var path = require('path');

// npm modules
var capture = require('webcam-capture');
var pictureTube = require('picture-tube');
var eos = require('end-of-stream');
var through = require('through2');



function doit() {
  var camera = capture({});
  var tube = pictureTube();
  tube.pipe(through(function (data, enc, cb) {
    process.stdout.write(data, cb);
  }));

  camera.stdout.pipe(tube);

  eos(camera, function (err) {

    if (err) { console.error('stream errorororororored'); }
    doit();
  });
}

doit();
