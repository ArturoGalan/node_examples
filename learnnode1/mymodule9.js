var http = require('http')


module.exports = function getContents(url,callback){
http.get(url, function (response) {
    response.setEncoding('utf8');
    let rawData = '';
    
    response.on('data', function (data){
        //console.log(data)
        rawData += data;
    });
    
    response.on('end', () => {
        //console.log(rawData.length);
        console.log(rawData);
        callback(null);
    });
    response.on('error', console.error);
}).on('error', console.error);
}