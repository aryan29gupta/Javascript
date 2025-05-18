// FOR OF 

const arr = [1,2,3,4,5]
for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`${greet}`);
}




// Maps: It is an object which holds key value pair. No duplicate values are entered
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
//console.log(map);

for (const [key,value] of map) {
    console.log(`Key: ${key}`);
    console.log(`Value ${value}`);
}
//objects are not iterable like this
//move to object_iteration.js