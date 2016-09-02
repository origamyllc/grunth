'use strict';

var bunyan = require('bunyan');
var logger = bunyan.createLogger({
    name: 'fold-orchestrator',
    streams: [
        {
            level: 'info',
            stream: process.stdout            // log INFO and above to stdout
        },
        {
            level: 'error',
            stream: process.stdout   // log ERROR and above to a file
        }
    ]
});

module.exports = logger;

