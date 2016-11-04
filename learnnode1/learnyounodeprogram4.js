var fs = require('fs')

if (process.argv[2]) {

    fs.readFile(process.argv[2], 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        var lineNumbers = data.split('\n').length - 1;
        console.log(lineNumbers);
    });


}
