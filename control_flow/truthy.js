const userEmail = "s@google.com"
const usernames = []

if (userEmail) {
    console.log("got your mail");
    
}   else{
    console.log("not your mail");
    
}

// falsy value 
// false, 0, -0, BigInt 0n, "", null, NaN, undefined

// truthy value
// "0", "false", " ", [], {}, function(){}

// if(usernames===0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Null Coalescing Operator (??): null undefined

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10 ?? 15

console.log(val);

// Terniary Operator

//condition ? true : false
const Price = 100
Price <= 80 ? console.log("less than 80") : console.log("more than 80");

