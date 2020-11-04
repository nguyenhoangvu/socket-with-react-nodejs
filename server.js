const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
var http = require('http').createServer(app);

const port = 8000;
// var http = require('http').Server(app);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/client/', 'index.html'));
  // res.send('<h1>Hello world</h1>');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./src/routes/routes')
app.use('/src', router)

app.listen(port);