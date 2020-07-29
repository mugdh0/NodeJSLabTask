var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('login');
});

router.post('/', function(req, res){

  if(req.body.uname=='admin' && req.body.pass=='1234'){
    res.redirect('/admin');
  }else if(req.body.uname=='employee' && req.body.pass=='1234'){
    res.redirect('/employee');
  }else{
    res.send("invalid user");
  }

});

module.exports = router;
