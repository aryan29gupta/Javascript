const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    py: "Python"
}

for (const key in myObj) {
    //console.log(`${key} refers to ${myObj[key]}`);
}


//for in loop gives the index value in case of arrays whereas for of loop gives the value of the index in the array i.e directly Aryan,Ravi,Rajesh
arr = ["Aryan","Ravi","Rajesh"]
for (const key in arr) {
    console.log(key);
    console.log(arr[key]); //to get value     
}