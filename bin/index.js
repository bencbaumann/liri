const say = require('say');
const liri = require('../lib/liri');
const format = require('../lib/format');
const log = require('../lib/log');

liri[process.argv[2].toLowerCase()]((err, res)=>{
        if(err) console.log(err);
        console.log(format(res));
        log(format(res), err => {
            if(err) console.log(err);
            say.speak('I hope you like your results, please check the log.txt file');
        });
    }, process.argv[3]
);