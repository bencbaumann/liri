const { appendFile } = require('fs');
const { resolve, join } = require('path');


module.exports = (str, callback) => {
    appendFile('log.txt' , str, callback);
}