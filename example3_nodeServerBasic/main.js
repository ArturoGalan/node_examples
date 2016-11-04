// Description: A basic HTTp server with Node.js

var http = require('http');

var server = http.createServer(function myServer(req, res) {
    console.log('url', req.url);
    console.log('method; ', req.method);
    //auth 
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello world\n');
})

server.listen(1337, '127.0.0.1', function () {
    console.log('Server running at http://127.0.0.1:1337/');
});


