function laptop(lname:string, lexpiry:number, lmanufacture:number):number
{
  return lexpiry * lmanufacture
}
let A:number=laptop('hp',2026,2020)
console.log(A)
let c =(lname:string, lexpiry:number, lmanfature:number):number=>lexpiry-lmanfature

console.log(c('dell',2029,2020))