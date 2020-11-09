const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let fs = require('fs')
var router = require('./src/routes/routes')

const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/client/', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/src', router)

http.listen(port);