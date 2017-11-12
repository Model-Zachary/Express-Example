var express = require('express');

var app = express();

// 设置端口 并跑起来 后面的function 是回调函数
var server = app.listen(80, function () {
    console.log(123)
})
// get 自带了next 所以不用传这个参数进去    这个意思是去找你根目录 跟路由有点像 通过地址找内容
// app.get('/', function (req, res) {
//     res.send('<div>root</div>')
// })

// // 在地址栏输入foo 找到这个目录下的这些内容
// // app.get('/foo',function(req,res){
// //      res.send('<div>foo</div>')
// // })

// 可以实现上面同样的功能  用数组整合进来
var a = function (req, res, next) {
    res.send('<div>root</div>')
    next()
}
var b = function (req, res, next) {
    console.log('<div>foo</div>')
    next()
}
var c = function (req, res) {
    res.send('<div>foo</div>')
}
app.get('/', [a, b, c])

// 执行两次回调
app.get('/foo', function (req, res, next) {
    // 和中间件一样send只能发送一次 所以 为了让下面的执行 把这个改成console 让下面执行这个 send方法
    console.log('<div>foo</div>')
    // 执行两次必须要有这个next
    next()
}, function (req, res, next) {
    res.send('<div>foo</div>')
})

// 重定向
app.get('/redirect', function (req, res) {
    // 301 可写可不写 写了就是告诉搜索引擎 以后搜索到这个页面直接重定向到baidu 
    res.redirect(301, 'http://baidu.com')
})

// 打印json数据
let jsonStr = {a:1,b:2}
app.get('/json',function(req,res){
    res.json(jsonStr)
})

// 如果什么都找不到 通过中间件来说明  
app.use(function (req, res, next) {
    // 默认 status 是200 其实这个 status不写也可以 只是 写了能给浏览器传递一个这个信息 会更友好一点
    res.status(404).send('找不到这个页面')
})