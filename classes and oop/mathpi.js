const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const code = {
    name: 'JavaScript',
    price: 250,
    isAvailable: true,

    PiValue: function(){
        console.log("pi ki change nahi kar sakta");
    }
}

console.log(Object.getOwnPropertyDescriptor(code, "name"));

Object.defineProperty(code, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(code, "name"));

for (let [key, value] of Object.entries(code)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}