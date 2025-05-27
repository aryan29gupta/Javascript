const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (val){
    console.log(val);
})

coding.forEach((val) => {
    console.log(val);

})

function printvalue(value){
    console.log(value);
}

coding.forEach(printvalue) //give reference of function and not execute by printvalue()

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


objarray = [
    {
       language:"hindi",
    },
    {
       language:"english",
    },
    {
       language:"spanish",
    }
]

objarray.forEach((item) => {
    console.log(item.language);
    
});