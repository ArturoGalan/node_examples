var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        var rawData = data.toString()
        console.log(rawData.length)
        console.log(rawData)
    }));
    response.on('error', console.error);
}).on('error', console.error);
