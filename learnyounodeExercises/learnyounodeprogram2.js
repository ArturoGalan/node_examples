
var outnumber = 0;
for (var i = 2; i < process.argv.length; i++) {
    outnumber += +process.argv[i];

}


console.log(outnumber);
