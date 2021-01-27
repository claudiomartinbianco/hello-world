var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi Whirlpool!');
});
server.listen(80);


public deleteTrack(index: number) {
 // out of bound check
 if(!(index <= this.tracks.length)) {
   return;
 }

 this.tracks.splice(index,1);
}
