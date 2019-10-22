const fs = require('fs');

fs.readdir('./build', (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } else {
        files.forEach((file) => {
            console.log(file);
        });
    }
});