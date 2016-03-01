var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
//SET THIS PLEASE BEFORE RUNNING THE SERVER AND NEVER PUSH CREDENTIALS TO GIT
var url = 'mongodb://<dbuser>:<dbpassword>@ds059115.mlab.com:59115/lifeexpress';
var db;


app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Life Express server asdfd!');
});


app.get('/api/people', function(req, res){
	db.collection("people").find().toArray(function(err, docs){
		res.json(docs);
	})
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

