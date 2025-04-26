// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const AnotherId = Symbol('123')

// console.log(id===AnotherId);

const BigNumber = 2323236446585648n

// Reference(Non Primitive)

// Arrays, Objects, Functions

const Actors = ["Salman Khan", "Sharukh Khan", "Shami Kapoor"]
let mySelf = {
    name: "shubham",
    age: 21,
}

const MyFunction = function(){
    console.log("Hello");
    
}

// console.log(typeof Actors);


// ********************************** 

// Stack (Primitive), Heap (Non-Primitive)

let myName = "ShubhamJain"

let anotherName = myName
anotherName = "HirakJain"

console.log(myName);
console.log(anotherName);

let User1 = {
    email : "user@ampverse.com",
    upi : "user@gpay"
}

let User2 = User1
User2.email = "user2@ampverse.com"

console.log(User1.email);
console.log(User2.email);
