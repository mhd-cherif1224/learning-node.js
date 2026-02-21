function hello(name){
    console.log("hello world, and hello to "+name);
}

function sendName(A){
    const name = "cherif";
    A(name);
}

sendName(hello);




function afficher(number,finalNumber){
    console.log("the number :"+number+" is doubled : " + finalNumber);
}

function processNumber(callback){
    let number = 10;
    let finalNumber = number *2 ;

    callback(number,finalNumber);
}

processNumber(afficher)


const p = new Promise((resolve) => {
  resolve(42);
  console.log(resolve);
});

console.log("--------------------------------------")
p.then(value => {
  console.log(value);
});


console.log("--------------------------------------")
const j = new Promise(( reject) => {
  reject(42);
    console.log(j);
});



const divide = (a,b) => {
    return new Promise((resolve , reject) => {
        if(b == 0){
            reject(new Error("you cant divide on zero"));
        }else{
            resolve(a/b);
        }
    })
}

divide(10 , 0).then(r => console.log("teh result is : "+r)).catch(e => console.log("the error is "+e));


module.exports = divide;