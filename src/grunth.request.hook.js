
var uuid = require('uuid');
var  _ = require('lodash');

var hooker  = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {
            hook : function (req,app) {
                var meta = {};

                req.id = uuid.v4();
                _.extend(meta, {
                    requestId: req.id,
                    env: app.locals.settings.env,
                    host: req.headers.host.split(':')[0],
                    port: req.headers.host.split(':')[1],
                    browser : req.useragent.browser,
                    version : req.useragent.version,
                    os : req.useragent.os,
                    platform: req.useragent.platform,
                    url:req.url,
                    method: req.method
                });
                return meta;
            }
        };

    };

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
