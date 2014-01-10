# koa-less

 less middleware for Koa

## Installation

```js
$ npm install koa-less
```

## Options

  See [the less middleware document](https://github.com/emberfeather/less.js-middleware).

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

## License

  MIT