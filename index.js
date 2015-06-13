// native modules
var fs = require('fs');
var path = require('path');

// npm modules
var capture = require('webcam-capture');
var pictureTube = require('picture-tube');

var camera = capture({});
var tube = pictureTube();

camera.stdout.pipe(tube).pipe(process.stdout);
