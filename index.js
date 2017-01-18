var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port:3000 });

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('R');
ws.send('G');
ws.send('B');
});
