var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
//SET THIS PLEASE BEFORE RUNNING THE SERVER AND NEVER PUSH CREDENTIALS TO GIT
//var url = 'mongodb://<dbuser>:<dbpassword>@ds059115.mlab.com:59115/lifeexpress';
var url = 'mongodb://abhi:abhi@ds059115.mlab.com:59115/lifeexpress';
var db;

//onsole.log("DITNAME: ", __dirname + '\\static');
//FOR WINDOWS, USE 
app.use('/', express.static(__dirname + '\\static'));

//FOR LINUX, USE
//app.use('/', express.static(__dirname + '/static'));

app.use(bodyParser.json());



app.get('/api/people', function(req, res){

	console.log("Query string: ", req.query);

	var filter = {};
	if (req.query.place) {
		filter.place = req.query.place;
	}

	db.collection("people").find(filter).toArray(function(err, docs){
		//console.log(doc);
		res.json(docs);
	});
});

app.post('/api/people/', function(req, res){
	console.log("Req body:", req.body);
	var newPerson = req.body;

	db.collection("people").insertOne(newPerson, function(err, result){
		var newId = result.insertedId;
		db.collection("people").find({_id: newId}).next(function(err, doc){
			res.json(doc);
		});
	});

});


MongoClient.connect(url, function(err, dbconn) {
  assert.equal(null, err);
  db = dbconn;
  console.log("Connected correctly to mongo server.");

  var server = app.listen(3000, function(){
	  var port = server.address().port;
	  console.log('Server listening on port', port, '!');
  });
 
  //db.close();
});

