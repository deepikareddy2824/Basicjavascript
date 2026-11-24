let primenumbers:number[]=[3,9,12,15,18,21,24,27,30]

primenumbers.splice(4,3)   // remove elements from 4th index to 3 elements

console.log(primenumbers)

primenumbers.splice(6)  // remove only 6th index
console.log(primenumbers)


 primenumbers.splice(2,3,   1,5,7)    //remove 2nd and 3rd index  and add 3 elements in that place
 console.log(primenumbers)