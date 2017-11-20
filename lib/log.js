const { appendFile } = require('fs');
const { resolve } = require('path');


module.exports = (str, callback) => {
    appendFile(resolve(rootname, 'log.txt'), str, callback);
}