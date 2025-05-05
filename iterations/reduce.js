const myNums = [1,2,3,4]

// const total = myNums.reduce(function (acc,currentValue) {return acc+currentValue},0)
// const total = myNums.reduce(function (acc,currentValue) {
//     console.log(`acc: ${acc} and current value: ${currentValue}`);
//     return acc+currentValue
// },0)


const total = myNums.reduce( (acc ,currentValue ) => 
    
    acc +currentValue
,0 )

console.log(total);


const shoppinCart = [
    {
        name: "Apple",
        price: 50
    },
    {
        name: "Banana",
        price: 30
    },
    {
        name: "Grapes",
        price: 70
    },
    {
        name: "Melon",
        price: 150
    }
]

const totalPrice = shoppinCart.reduce( (acc, item) => acc+item.price,0  )

console.log(totalPrice);
