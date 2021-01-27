var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi Whirlpool!');
});
1 == '1'
server.listen(80);
