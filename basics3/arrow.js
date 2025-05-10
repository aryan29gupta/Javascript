// let object1 = {
//    name: "Aryan",
//    age: 18,

//    welcomeMessage: function(){
//       console.log(`${this.name}, welcome to website`);
//       console.log(this)
//    }
    
// }
// object1.welcomeMessage()
// // object1.name="Rohan"
// // object1.welcomeMessage()
// //console.log(this);       //will print {} because empty object but the 
//                            //global object in the browser is window object


// function chai(){
//    console.log(this);
// }

// chai()

// const chai = () => {
//    let name = "Arnav"
//    console.log(this);
// }

// chai()

const addnum = (num1,num2) => {
   return num1+num2
}
console.log(addnum(4,5));


// IMPLICIT RETURN - () will be used instead of {} 
const addnumber = (num1,num2) => (num1+num2)
console.log(addnum(4,5));

const objectUse = (a,b) => ({username:"aryan"})
console.log(objectUse(1,2));
