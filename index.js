var req = {
  "method": "GET",
  "url": "/path?q=1#anchor",
  "headers": {
    "x-hi": "Mom",
    "connection": "close",
    "host":"hostname",
  },
  "useragent":{"browser":"chrome"},
  "remoteAddress": "120.0.0.1",
  "remotePort": 51244
}

var app = {
   locals:{
     settings:{}
   }
}


var  $meta   = require('./src/grunth.request.hook.js');
var  logger = require('./src/grunth.bunyan.hook.js');

var $grunth  = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    $meta.hook(req,app)
    var $logger = logger.hook(req);

    return{
      $logger:$logger
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    app:null,
    hook:function(req){
      if ( !instance ) {
        instance = init(req,this.app);
      }
      return instance.$logger;
    },
    use: function (app) {
       this.app = app;
    }
  };

})();
