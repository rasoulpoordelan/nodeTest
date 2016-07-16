var express = require('express');
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 80,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


app.listen(port ,function () {
  console.log('Example app listening on port '+port);
});