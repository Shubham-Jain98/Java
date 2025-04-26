const name = "shubham"
const age = 21

// console.log(name + age + " Value");

// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Bondi-Boys')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('b'));


const newGameName = gameName.substring(0,6)
// console.log(newGameName);

const yetAnotherGame = gameName.slice(-7, 6)
console.log(yetAnotherGame);

const newString = "     Shubham      "
console.log(newString);
console.log(newString.trim());

const url = "https://ampverse.com//College%20Rivals"

console.log(url.replace('%20','-'))

console.log(gameName.split('-'));
