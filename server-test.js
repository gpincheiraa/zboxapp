var express = require('express');
var bodyParser = require('body-parser');

// Configuración de la aplicación express
var app = express();
app.use(bodyParser());

//"Watcher" de peticiones
app.use(function (req, resp, next) {
  console.log("recibida petición: " + req.url);
  if (req.body && Object.keys(req.body).length>0) {
    console.log("body: " + JSON.stringify(req.body));
  }
  next();
});
//Directorios Estáticos
app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/client', express.static(__dirname + '/client'));

console.log('ready');
console.log('steady');
app.listen(3000);
console.log('go');