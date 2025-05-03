// if

const isUserLoggedIn = true
const temperature = 41

// if (temperature >= 50) {
//     console.log("it is greater than 50");
// }   else{
//     console.log("it's less than 50");
// }
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score>100) {
//     const power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);


const balance = 1000

// if(balance>500) console.log("test"),console.log("test2");
// should not do it mostly

// if(balance < 500){
//     console.log("Less Than 500");
// }
// if(balance < 750){
//     console.log("Less Than 750");
// }
// if(balance < 900){
//     console.log("Less Than 900");
// }
// else{
//     console.log("Less Than 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy");
}
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("Authorized");
    
}