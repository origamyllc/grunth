const _logger = require('bunyan').createLogger({ name: 'myapp' });

function grunth(){
  this.req = null;
  this.log  = null;
}

grunth.prototype.create_logger = function(req,res){
  this.req = req.request;
  this.log = _logger.child({req:this.req });
  req.log =  this.log;
}

export function logger (req,res,next){
  var _grunth = new  grunth();
  _grunth.create_logger(req,res)
  delete req.request;
  next();
}
