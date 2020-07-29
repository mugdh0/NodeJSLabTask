var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('employee');
});

module.exports = router;

/*router.post('/', function(req, res){
  if(req.body.submit == 'Add employe'){
    res.redirect('admin/addEmployee');
  }else if(req.body.submit == 'AllEmpList'){
      res.redirect('admin/allEmployee');
  }
  else{

  }
});

*/
