function sayMyName (){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
    
}

// sayMyName

// function AddTwoNumber(number1, number2){
//     console.log(number1+number2); 
// }

function AddTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = AddTwoNumber(2,3)

// console.log("Result: " + result);

function LoginUsername(username= "sam"){
    if(!username){
        console.log("Please Enter a valid Username ");
        return
        
    }
    return `${username} just logged in`
}

// console.log(LoginUsername("Shubham"));
// console.log(LoginUsername());

function ReturnCartValue(val1, ...num1){
    return num1
}

// console.log(ReturnCartValue(200,400,500));

const user ={
    username: "Shubham",
    price: 99999999
}

function handleobjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobjects(user)
handleobjects({
    username: "Reataj",
    price: "9999999999999"
})

const myNewArray = [100,200,300,2000]

function  returnArray(getArray){
    return getArray[1]
}

// console.log(returnArray(myNewArray));
console.log(returnArray([90,90909,232,3232]));
