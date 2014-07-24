# koa-less

Less middleware for Koa

## Installation

```js
$ npm install koa-less
```

## Example

```js
var less = require('koa-less');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(less('./public'));

app.use(serve('./public'));

app.listen(3000);
```

## Options

See [the less middleware document](https://github.com/emberfeather/less.js-middleware).

Example of use:   
```js
var path=require('path');
app.use(require('koa-less')('/my/less/source/path', {
  dest: path.join(__dirname, 'public')
}));
```

## Troubleshooting

### My less never recompiles, even when I use `{force: true}`!

Make sure you're declaring less-middleware before your static middleware, if you're using the same directory, e.g. (with koa-static):


```js
var lessMiddleware = require('koa-less');
var app = koa();
app.use(lessMiddleware(__dirname + '/public'));
app.use(require('koa-static')(__dirname + '/public'));
```

### IIS

If you are hosting your app on IIS you will have to modify your `web.config` file in order to allow NodeJS to serve your CSS static files.  IIS will cache your CSS files, bypassing NodeJS static file serving, which in turn does not allow the middleware to recompile your LESS files.

## License

MIT
