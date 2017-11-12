var express = require('express');

var app = express();

// 设置端口 并跑起来 后面的function 是回调函数
var server = app.listen(80, function () {
    console.log(123)
})

// 用路由的形式把它引入进来
var router = require('./router');

// 用中间件的形式吧router引入进来
app.use('/',router)