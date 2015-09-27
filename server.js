var http = require('http');

var server = http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Hello World\n");
	console.log('A request was made / ' + req.method);
});

server.liste(process.env.PORT || 3000);