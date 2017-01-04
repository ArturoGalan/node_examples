var fs = require('fs')

if (process.argv[2]) {
    //console.log(process.argv[2].toString());
    try {
        var contents = fs.readFileSync(process.argv[2]);
        var lineNumbers = contents.toString().split('\n').length - 1;
        console.log(lineNumbers);
    } catch (e) {
        console.log(e);
    }


}


// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1