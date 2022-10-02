const fs = require('fs');

const writeFile = htmlFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', htmlFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    });
};

module.exports = { writeFile };