var express = require('express');
var bodyPerser = require('body-parser');
var app = express();

var login = require('./controller/login');
var admin = require('./controller/admin');
var employee = require('./controller/employee');

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyPerser());
app.use('/login',login);
app.use('/admin',admin);
app.use('/employee',employee);
 //router

app.listen(3000, function(){
  console.log('express http server started at 3000')
})
