

const name = require('./tutFreeCodeCamp')
const d = require('./index');


console.log(d.addNumbers);

console.log(name.john);

d.divide(2,4).then((result)=>{

    console.log(result);
}).catch(err => {
    console.log(err);
})

console.log("this one is a function :" + d.divide(12,3).
                                        then((result) => {
                                            console.log("the result is : " + result)}).
                                        catch((err) => {
                                            console.log("the error :" + err)
                                        })
                                    
                                    )
console.log("this one is age " + d.age);
console.log("this one is the items array " + d.items);
console.log("this one is a person object " + d.singlePerson);

