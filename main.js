var express = require('express');
var app = express();


app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
	res.send('Life Express server asdfd!');
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Server listening on port', port, '!');
});