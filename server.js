﻿var express = require('express');
var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


app.listen(port,ip ,function () {
  console.log('Example app listening on port '+port);
});