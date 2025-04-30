// singleton 
// object.create

const tinderUser = new Object()

tinderUser.id = "ABC"
tinderUser.name = "Shubham"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "Reataj@ampverse.com",
    fullName : {
        UserFullName : {
            FirstName : "Reataj",
            LastName : "Roy"
        }
    }
}
// console.log(regularUser.fullName.UserFullName.FirstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Jain",
    [mySym]: "mykey1",
    age: "21",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "shubham@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shubham@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);   
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const course = {
    courseName : "how to become rich",
    price : "999",
    courseInstructor : "Shubham"
}

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     name : "Shubham"
//     torevise : "javascript"
//     price : "free"
// }

[
    {},
    {},
    {}
]