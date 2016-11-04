var http = require('http')
var url = require('url')

var port = Number(process.argv[2])
var server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            //body.push(chunk);
        }).on('end', function () {
            var reqTime = new Date(url.parse(req.url, true).query.iso)
            var urlPath = url.parse(req.url, true).pathname
            var resTime

            if (urlPath === '/api/parsetime') {
                //Tambien funciona si las propiedades del objeto van entre comillas
                //resTime = { 'hour': reqTime.getHours(), 'minute': reqTime.getMinutes(), 'second': reqTime.getSeconds() };
                resTime = { hour: reqTime.getHours(), minute: reqTime.getMinutes(), second: reqTime.getSeconds() };
            } else if (urlPath === '/api/unixtime') {
                resTime = { 'unixtime': reqTime.getTime() }
            }

            if (resTime) {
                res.writeHead(200, { 'content-Type': 'application/json' })
                res.end(JSON.stringify(resTime))
            } else {
                res.writeHead(404)
                res.end()
            }


        });


    } else {
        return res.end('send me a GET\n')
    }
})
server.listen(port)



// Para testear con RegExp
//  if (/^\/api\/parsetime/.test(req.url)) {          
//    result = parsetime(time)                        
//  } else if (/^\/api\/unixtime/.test(req.url)) {    
//    result = unixtime(time)                         
//  }                                                 