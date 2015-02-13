require('newrelic');
var server = require("./server.js");
var router = require("./router");
var requesthandler= require("./requesthandler");

var handler = {}
handler["/"] = requesthandler.home;
handler["/reset"] = requesthandler.reset;
server.start(router.route, handler);
