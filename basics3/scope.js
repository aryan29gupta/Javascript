let a = 20;
const b = 30;
var c = 40;

console.log(a)
console.log(b)
console.log(c)

if (true){
    // let a = 20
    // const b = 30
    var c = 40      // var will always work inside 
}

// console.log(a)
// console.log(b)
console.log(c)


//Local variables cannot be accessed outside the function

let f = 100
if (true){
   
    const f = 30
    console.log(f);
    
}

// console.log(a)
console.log(f)
// console.log(c)

//global scope is different in browser and when we run it in node




function outerfunc(){
    const a = "This is outer variable"

    function innerfunc(){
        console.log(a)
        const b = "This is inner variable"
        console.log(b)
    }
    innerfunc()
    //console.log(b)  //(will give error on execution because local variables cannot be accessed outside the function)
}
outerfunc()

//___________________________________________________________________________________________________//

//Same with if else because it is also a scope, local variables cannot be accessed outside the scope
if (true){
    const name = "Aryan"
    if (name ==="Aryan"){
        const surname = " Gupta"
        console.log(name+surname);      
    }
}

