var http = require('http')

//console.log('URL: ',process.argv[2])
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    let rawData = '';
    
    response.on('data', function (data){
        //console.log(data)
        rawData += data;
    });
    
    response.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });
    response.on('error', console.error);
}).on('error', console.error);
