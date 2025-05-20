const nums = [1,2,3]

const mynum = nums.reduce( function(acc,currval){
    console.log(`ACC:${acc} and CURRVAL:${currval}`);
    return acc + currval
},0) //the value written after comma, 0 in this case is the first value of accumulator

console.log(mynum);

//now with arrow function

const total = nums.reduce( (accc,currrval) => accc+currrval,0 )
console.log(total);
