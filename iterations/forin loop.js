const myObject ={
    gameone: "Gta 5",
    gametwo: "Gta 4",
    gamethree: "Gta 3",
    gamefour: "Gta 2",
}

for (const key in myObject) {
    // console.log(`${key} name is ${myObject[key]}` )
}

const codingLang = ["JS", "Dart", "Ruby", "Python"]

for (const key in codingLang) {
    // console.log(codingLang[key]);
    
}

//map is not iterable so for in loop won't be itterated
const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("IT", "Italy")

for (const key in map) {
    console.log(key);
    
}