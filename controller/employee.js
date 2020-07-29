var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('employee');
});

router.get('/myProfile', function(req, res){
  res.render('myProfile');
});
router.get('/updateProfile', function(req, res){
  res.render('update');
});

router.post('/', function(req, res){
  if(req.body.submit == 'myProfile'){
    res.redirect('employee/myProfile');
  }
  else if(req.body.submit == 'updateProfile'){
      res.redirect('employee/updateProfile');
  }
  else{

  }
});

module.exports = router;
