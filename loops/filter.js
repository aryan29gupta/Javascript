//forEach cannot return a value
const nums = [1,2,3,4,5,6,7,8,9,10]

const newNum = nums.filter( (num) => {
    return num > 4
})

console.log(newNum);


// if you open a scope then return keyword will be used