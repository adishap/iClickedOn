
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/start.html');
});

app.get('/iClickedOn', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
app.use('/public',express.static(__dirname + '/public'));

io.on('connection', function(socket){
	socket.on('cordinates', function(msg){

		//reading left and top cordinates from the string of format (left,top)
		left = msg.substring(0,msg.indexOf(','));
		top = msg.substring((msg.indexOf(',') +1 ),(msg.length));
		io.emit('cordinates', {top: top, left: left});
	});
});

http.listen(8080, function(){
	console.log('listening on *:8080');
});
