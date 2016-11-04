var http = require('http')

//console.log('URL: ',process.argv[2])
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
        console.log(data)
    });
    //tambien funciona
    //response.on('data', console.log)
    response.on('error', console.error);
}).on('error', console.error);
