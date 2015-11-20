"use strict";

var fs = require('fs');
var promisify = require("es6-promisify")

module.exports = promisify(fs.readdir);
