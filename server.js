const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;
// var http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./src/routes/routes')
app.use('/src', router)

app.listen(port);