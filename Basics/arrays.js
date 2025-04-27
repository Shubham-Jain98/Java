// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["Batman", "Superman", "Irnoman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[5]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice and splice

// console.log("A", myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C", myArr);

const marvel_heroes = ["Spiderman", "Ironman", "Thor","Hulk"]
const dc_heroes = ["green lantern", "Superman" , "Batman"]

// marvel_heroes.push(dc_heroes)
const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes)

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableAnotherArray = anotherArray.flat(Infinity)
// console.log(usableAnotherArray);

// console.log(Array.isArray("Shubham"))
// console.log(Array.from("Shubham"))
// console.log(Array.from({name : "Shubham"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
