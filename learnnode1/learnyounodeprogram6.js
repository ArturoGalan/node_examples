var fs = require('fs')
var path = require('path')
var mymodule = require('./mymodule6.js')

var dir = process.argv[2];
var extension = process.argv[3];

mymodule(dir, extension, function (err, filteredList) {
    if(err){
        console.log('There was an error',err);
    }
    
    filteredList.forEach(function (line){
        console.log(line);
    });
});