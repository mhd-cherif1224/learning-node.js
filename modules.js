//os modules
const os = require('os');


//user info
console.log(os.userInfo());


//the system's uptime
console.log(`the sys uptime : ${os.uptime()}`);

const currentSys = {
    name : os.type(),
    release :os.release(),
    totalmem : os.totalmem(),
}
console.log("my current os is:", currentSys);


//the path modules

const path = require('path')

console.log(path.join('.\\hello', 'world'));
