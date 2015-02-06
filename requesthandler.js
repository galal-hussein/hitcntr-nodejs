function home(response) {
  // MongoDB Connection
  var body="";
  var databaseUrl = "mongo/countdb";
  var collections = ["hits"];
  var db = require("mongojs").connect(databaseUrl, collections);
  
 db.hits.find({}, function(err, hits) {
  if( err || !hits)
  {
        console.log("No data found");
	db.hits.insert({'count': 0});
  }
  else
  {
        hits.forEach( function(hit) {
        console.log("data Found "+hit.count);
        body += hit.count;
	db.hits.update({'count': hit.count},{$set: {'count': hit.count+1}});
  });
  }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, hits: "+body);
    response.end();
 
});}

function reset(response) {
  // MongoDB Connection
  var body="";
  var databaseUrl = "mongo/countdb";
  var collections = ["hits"];
  var db = require("mongojs").connect(databaseUrl, collections);
  db.hits.update({'count': {$gt: 0}},{$set: {'count':0}})
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Counter Restarted!");
    response.end();

}
exports.home = home;
exports.reset = reset;
