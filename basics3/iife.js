// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
/* SOMETIMES, problem occur due to pollution of global scope and to remove that pollution
   and resolve that issue we use IIFE: IIFE IS THE FUNCTION WHICH IS IMMEDIATTELY EXECUTED */

(function hello(){
    console.log("Hello")                       //NAMED IIFE
}) ();


((a) => {
    console.log(`Hello arrow ${a}`);          //UNNAMED IIFE
    
})("Aryan")