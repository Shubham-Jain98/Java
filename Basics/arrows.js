const user = {
    username: "Shubham",
    price: 9999,
    welcome_Message: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcome_Message()
// user.username = "Reataj"
// user.welcome_Message()

// console.log(this);

// function one () {
//     let username = "Shubham"
//     console.log(this.username);
    
// }

// one()

const one = () => {
    let username = "Shubham"
    console.log(this.username);
}

// one()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) =>  (num1+num2)

const addTwo = (num1,num2) =>  ({username: "shubham"})


console.log(addTwo(2,3)); 

// const myArray = [2,5,3,7,8]

// myArray.forEach()