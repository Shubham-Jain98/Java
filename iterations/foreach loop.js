const codingLang = ["JS", "Dart", "Ruby", "Python"]

// codingLang.forEach(function (val) {
//     console.log(val);
    
// })

// codingLang.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// codingLang.forEach(printMe)

// codingLang.forEach((item,index , arr) => {
//     console.log(item,index,arr);
    
// })

const coding = [{
    Language: "Javascript",
    LanguageFileName: "Js"
},{
    Language: "Java",
    LanguageFileName: "Java"
},{
    Language: "Python",
    LanguageFileName: "py"
}]

coding.forEach( (item, index) => {
    console.log(item.LanguageFileName);
    
} )