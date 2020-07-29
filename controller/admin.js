var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('admin')
});

/*
router.post('/', function(req, res){
  if(req.body.submit=='Add employe'){
    res.redirect('admin/addEmployee');
  }else if(req.body.submit=='AllEmpList'){
      res.redirect('admin/allEmployee');
  }
});

router.get('/addEmployee', function(req, res){
  res.render('addEmployee');
});
router.get('/allEmployee', function(req, res){
  res.render('allEmployee');
});

app.get('/admin/edit/3', function(req, res){
         res.send(req.params.id);
})
*/
module.exports = router;
