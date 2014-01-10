module.exports = function(options){
  return function*(next){
    yield less(this.req, this.res, options);
    yield next;
  };
};

function less(req, res, options){
	return function(callback){
  	require('less-middleware')(options)(req, res, callback);
	};
}