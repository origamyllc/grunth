'use strict';

var bunyan = require('bunyan');
var config = require('./../config');

function reqSerializer(req) {
    return {
        id:req.id,
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}

var logger = bunyan.createLogger(config.config);

logger.addSerializers({req: reqSerializer});

module.exports = logger;
