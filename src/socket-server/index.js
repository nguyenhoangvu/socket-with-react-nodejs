var express = require('express');
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/', 'index.html'));
  // res.send('<h1>Hello world</h1>');
});

// app.use(express.static(__dirname + '/client'));
// app.get('/', function(req, res){
//   res.sendFile('index.html');
// });


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('Vu', (msg) => {
    io.emit('Vu', msg);
  });

  socket.on('Giang', (msg) => {
    io.emit('Giang', msg);
    console.log('message: ' + msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});