var http = require('http')
var fs = require('fs')

var port = Number(process.argv[2])
var fileToRead = process.argv[3]

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type': 'text/plain'})
    var buffer = fs.createReadStream(fileToRead)
    buffer.pipe(res);
    
})
server.listen(port)