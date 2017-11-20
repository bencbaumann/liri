module.exports = obj => {
    const objArray = Array.isArray(obj) ? obj : [obj]; 
    let str = "";
    objArray.forEach(obj => {
        str += "------------------------------------------------\n";
        for (const prop in obj) {
        str += `* ${prop}: ${obj[prop]}\n`;
        }
        str += "------------------------------------------------\n\n";
        });
    return str;
}