var express = require('express');

var router = express.Router();

router.use(function(req,res,next){
  var time = new Date();
  console.log(time.getFullYear() + '年')
   next()
})

router.get('/',function(req,res){
      res.send('root')
})
// get方法不用next
router.get('/one',function(req,res){
  res.send('one')
})
// one下面的页面
router.get('/one/child', function (req, res) {
  res.send('oneChild')
})



// 链式操作
router.route('/about')
.get(function(req,res){
   res.send('123')    
})
.post(function(req,res){
   res.send('456')
})
.put(function(req,res){
   res.send('789')
})

// url传值并获取  在地址然输入
router.get('/one/:id/:page',function(req,res){
  res.send('id:'+req.params.id+'page:'+req.params.page)
})

//404找不到页面处理
router.use( function (req, res) {
  res.status(404).send('找不到页面')
})

module.exports = router;