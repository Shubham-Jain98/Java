//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025 , 12 , 31)
// let myCreatedDate = new Date(2025 , 12 , 31 , 1 , 2)
let myCreatedDate = new Date("01-02-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "long",
    
})