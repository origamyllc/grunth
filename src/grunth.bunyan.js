'use strict';

var bunyan = require('bunyan');
var config = require('./../config');

var logger = bunyan.createLogger(config.config);

module.exports = logger;
