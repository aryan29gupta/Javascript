const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.map( (no) => {return no+10} )
console.log(newnums);
                                          //BOTH WILL GIVE SAME OUTPUT BUT V IMP
const newnums1 = nums.map( (no) => no+10 )
console.log(newnums1); 

//------------------------------------------------------------------------------

//Multiple maps and filter can also be used
const number = nums
                .map( (no) => no*10 )
                .map( (no) => no+1  )
                .filter( (no) => no>100)

console.log(number); 