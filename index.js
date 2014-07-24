module.exports = function(){
	var options=arguments;
  return function*(next){
    yield less(this.req, this.res, options);
    yield next;
  };
};

function less(req, res, options){
  return function(callback){
  	require('less-middleware').apply(this, options)(req, res, callback);
	};
}
