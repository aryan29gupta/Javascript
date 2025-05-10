//++++++++++++++++++++++++++++++++++++++++++ Interesting Concept ++++++++++++++++++++++++++++++++
// Hoisting


console.log(addnum(5))
function addnum(num){
    return num + 1
}



//This will give error because the function is not declared before printing 
console.log(addnumtwo(8))
const addnumtwo = function(num){
    return num + 1
}

