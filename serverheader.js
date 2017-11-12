var express = require('express');

var app = express();

// 设置头部 可以跨域
app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.setHeader("Access-Control-Expose-Headers", "*");
    next();
});

// 设置端口 并跑起来 后面的function 是回调函数
var server = app.listen(8096,function(){
    console.log(123)
})

// 中间件 处理来回的事件
app.use(function(req,res,next){
      // console.log(req);
      // req主要使用这三个参数
    //   console.log(req.method,req.url,req.path)
      // 发送信息到页面 不管在哪个中间件 这个只能只能执行一次
      // res.send('123')
      // 能够执行除了这个中间件外的 其他中间件
      next()
})

app.use(function(req,res,next){
    res.send(req.method)
})




