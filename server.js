var http = require("http");
var url = require("url");

function start(route, handler) {
http.createServer(function(request, response) {
  var uri_path = url.parse(request.url).pathname;
  console.log("Request For "+ uri_path + " Recieved.");
  route(uri_path, handler, response); 
}).listen(8000);

console.log("Server has been started on port http://0.0.0.0:8000 !! :)");
}

exports.start = start;
