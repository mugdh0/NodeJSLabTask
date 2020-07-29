var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('admin');
});
router.get('/addEmployee', function(req, res){
  res.render('addEmployee');
});
router.get('/allEmployee', function(req, res){
  res.render('allEmployee');
});

router.post('/', function(req, res){
  if(req.body.submit == 'Add employe'){
    res.redirect('admin/addEmployee');
  }else if(req.body.submit == 'AllEmpList'){
      res.redirect('admin/allEmployee');
  }
  else{

  }
});



router.get('/update/:id', function(req, res){
        //res.send(req.params.id);
         res.render('update');
})
router.get('/delete/:id', function(req, res){
        //res.send(req.params.id);
         res.render('delete');
})

module.exports = router;
