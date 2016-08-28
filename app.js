var koa = require('koa');
var app = koa();
var koaNunjucks = require('koa-nunjucks-2');

app.context.render = koaNunjucks({
  ext: 'html',
  path: __dirname + '/views',
  nunjucksConfig: {
    autoescape: true
  }
});

app.use(function*(){
	this.body = yield this.render('index')
});

app.listen(3000)