var log =  require('./grunth.bunyan.js');

var $logger =(function (){

    function grunth(options) {
        log = options.log.child({req: options.req});
    }

    grunth.prototype.warn = function (message) {
        log.warn(message)
    }
    grunth.prototype.fatal = function (message) {
        log.fatal(message)
    }
    grunth.prototype.debug = function (message) {
        log.debug(message)
    }
    grunth.prototype.info = function (message) {
        log.info(message)
    }
    grunth.prototype.error = function (message) {
        log.error(message)
    }

    return {
        hook:function(req){
          return  new grunth({log: log,req:req});
        }
    }
})()



module.exports = $logger;
