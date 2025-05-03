// Immediately Invoked Function Expression (IIFE)

(function one(){
    console.log(`function one`);
    
})();

( (name) => {
    console.log(`function two ${name}`);
    
})("Shubham");
