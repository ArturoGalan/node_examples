var http = require('http')
var map = require('through2-map')

var port = Number(process.argv[2])
var server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    } else {
        return res.end('send me a POST\n')
    }
})
server.listen(port)