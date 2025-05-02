// var c = 300
let a =300

if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
    
}

for(let i= 0;i<Array.length;i++){
    const element = Array[i]

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Shubham"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "Shubham"
    if(username === "Shubham"){
        const website = "Github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//******************* Interesting ***********************

console.log(addOne(5));

function addOne(num){
    return num + 1
}

addTwo(6)

const addTwo = function (num){
    return num + 2
}

