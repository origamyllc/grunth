var logger= require('./grunth.bunyan.js');

var hooker  = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        return {
            request: {},
            hook: function (meta) {
                this.request = meta;
            },
            info: function (message) {
                delete this.request.message;
                this.request.message = message;
                logger.info(this.request)
            },
            error: function (message) {
                delete this.request.message;
                this.request.message = message;
                logger.error(this.request)
            },
            debug: function (message) {
                delete this.request.message;
                this.request.message = message;
                logger.debug(this.request)
            },
            warn: function (message) {
                delete this.request.message;
                this.request.message = message;
                logger.warn(this.request)
            }
        }

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