let odd:number[]=[1,3,5, 8,7,9,11,13]
let even:number[]=[0,2, 7,4,6,8,10,12]
let oddnumber:number[] = even.sort((b,c) => b-c) 
console.log(oddnumber)
let evennumber:number[] = odd.sort((a,d) => a-d)
console.log(evennumber)