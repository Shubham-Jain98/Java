// for of

// [{},{},{}]
// ["","",""]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

let Heroes = "Flash And Superman"
for (const i of Heroes) {
    if (i == " ") {
        continue
    }
    // console.log(i);
    
}


const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("IT", "Italy")

// console.log(map);


for (const [key,value] of map) {
    // console.log(key + `:- ` + value)
}

const myObject ={
    gameone: "Gta 5",
    gametwo: "Gta 4",
    gamethree: "Gta 3",
    gamefour: "Gta 2",
}

// for (const [key,value] of myObject) {
//     console.log(key + `:- ` + value)
// } Does not work myObject not iterable