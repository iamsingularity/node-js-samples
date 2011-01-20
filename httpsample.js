var http = require('http');

var server = http.createServer(function (request, response) {
   response.writeHead(200, {"Content-Type":"text/plain"});
   response.end ("Hello World!\n");
   console.log("Got a connection");
});

server.listen(80);

console.log("Server running on localhost on port 80");
