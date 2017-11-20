const liri = require('../lib/liri');
const format = require('../lib/format');

liri[process.argv[2].toLowerCase()]((err, res)=>{
        if(err) console.log(err);
        console.log(format(res));
    }, process.argv[3]
);