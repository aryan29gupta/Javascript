// function addNo(a,b){

//     console.log(a+b);
// }
// addNo(5,null)  

// function subt(a,b){
//     return a-b;

// }

// const diff = subt(6,4)
// console.log(diff);


function variables(name){
    return `${name} is here`
}

let name = variables("Shiv");
console.log(name);

// if you do not pass a value in argument then undefined will come
function variables(name="Sam"){
    if (name === undefined){
        console.log("Please enter a name");
        return 
    }
    else{
    return `${name} is here`
    }
}

let emptyname = variables("Arjun");
console.log(emptyname);