let odd:number[]=[1,3,5,7,9,11,13]
let even:number[]=[0,2,4,6,8,10,12]

let ascendingorder:number[] = even.sort((b,c) => b-c)
console.log(ascendingorder)

let descendingorder:number[] = odd.sort((a,d) => a-d)
console.log(descendingorder)

let newdesc=descendingorder.reverse();
console.log(newdesc)