/* Test node works... */
var http = require("http");

http.createServer(function (request, response) {
    // HTTP header, 200 OK, text/plain..
    response.writeHeader(200, {'Content-Type': 'text/plain'});

    // Send response body
    response.end("Hello world\n");
}).listen(1337);

console.log("Server running @ http://127.0.0.1:1337/");
