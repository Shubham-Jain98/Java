// let myName = "shubham     "
// let myWork = "code     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log(`shubham is present in all objects`);
}

Array.prototype.heyShubham = function(){
    console.log(`Shubham says hello`);
}

// heroPower.shubham()
// myHeros.shubham()
// myHeros.heyShubham()
// heroPower.heyShubham()

// inheritance

const User = {
    name: "code",
    email: "code@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SomeCodeIsNeeded     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shubham".trueLength()
"iceTea".trueLength()