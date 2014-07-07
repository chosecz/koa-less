module.exports = function(){
  return function*(next){
    yield less(this.req, this.res, arguments);
    yield next;
  };
};

function less(req, res, options){
	return function(callback){
  	require('less-middleware').apply(this, options)(req, res, callback);
	};
}