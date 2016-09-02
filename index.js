var request_hooker = require('./src/grunth.request.hook.js');
var bunyan_hooker = require('./src/grunth.bunyan.hook.js');
var bunyan_logger = require('./src/grunth.bunyan.js');


var uuid = require('uuid');
var  _ = require('lodash');

var hooker  = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {
            hook: function (req, app) {
                request_hooker.hook(req, app);
                bunyan_hooker.hook(req._metadata)
            },
            $logger:bunyan_logger
        }

    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if ( !instance ) {
                instance = init();
            }

            return instance;
        }

    };

})();

module.exports = hooker.getInstance();