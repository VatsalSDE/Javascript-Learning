// Immediately invoked function expressions
(function chai(){
    console.log("DB connected"); // this is named iife
})(); // this semicolon is required so that the function can decide the context of where to stop 

// to prevevent the pollution off the global scope

(() => { // this is unnamed iife
    console.log(`DB Connected two`);
})();

((name) => {  // this is parameterized iife 
    console.log(`DB Connected two ${name}`);
})('Vatsal');