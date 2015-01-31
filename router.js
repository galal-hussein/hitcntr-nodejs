function route(uri_path, handler, response) {
  if (typeof handler[uri_path] === 'function'){
	handler[uri_path](response);
} else {
	console.log(uri_path + " :404 Not Found");
        response.writeHead(404, {"Content-Type": "text/plain"});
  	response.write("404 Not Found");
  	response.end();
}
}
exports.route = route;
