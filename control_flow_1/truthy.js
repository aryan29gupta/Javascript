/* falsy values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN */

//Rest all are truthy
/* truthy values: These are the most confusing values
"0", 'false', " ",[], {}, function(){}    */


const a = 'false'
if (a){
    console.log("Not empty");
}
else{
    console.log("Empty");
    
}

const arr = {}
//To check if the object is empty we create an array of keys by object.keys
if (Object.keys(arr).length===0){
    console.log("True");
}

