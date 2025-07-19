var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World\n');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
