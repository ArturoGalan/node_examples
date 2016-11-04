var http = require('http')
var getContent = require('./mymodule9.js');


getContent(process.argv[2], ()=>{
    getContent(process.argv[3], ()=>{
        getContent(process.argv[4], ()=>{
        });    
    });
});
