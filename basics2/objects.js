const sym = Symbol("Creating a symbol")
const obj = {
    name: "Aryan",
    [sym]:"Example of Symbol",
    age: 18,
    college: "MAIT",
    email: "aryangupta2906@gmail.com"
}

console.log(obj.name);
console.log(obj["name"]);
console.log(obj[sym]);
console.log(typeof(sym));

console.log(obj["age"]);

obj.greeting = function(){
    console.log("Hello JS user");
}

obj.greetingTwo = function(){
    console.log(`Hello, ${this.college}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());

