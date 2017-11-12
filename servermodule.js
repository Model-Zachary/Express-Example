var express = require('express');

var app = express();

// 使用post 需要用到的插件 这三句话 缺一不可  意思就是 转换成json 因为默认 post 是基于数据流
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// 设置端口 并跑起来 后面的function 是回调函数
var server = app.listen(80, function () {
    console.log(123)
})

var html = require('fs').readFileSync('./module.html','utf-8')

app.get('/',function(req,res){
  res.send(html)
})
// 存放静态资源 通过这个 你可以在引用资源的时候 不出现资源所在的文件夹名 现在 你可以 直接 通过地址后面跟images/bg.jpg来访问
// /assets 是别名 相当于给一个根目录 
// app.use('/assets',express.static('assets'))
app.use(express.static('assets'))

// get
app.get('/book',function(req,res){
  res.send('bookname:' + req.query.bookname)
})
// post
app.post('/book', function (req, res) {
  res.send('bookname:' + req.body.bookname)
})