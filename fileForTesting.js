

const name = require('./tutFreeCodeCamp')
const d = require('./index');

console.log(name.john);

d(2,4).then((result)=>{

    console.log(result);
}).catch(err => {
    console.log(err);
})