function laptop(lname:string, lexpiry:number, lmanufacture:number):number
{
  return lexpiry * lmanufacture
}
let A:number=laptop('hp',2026,2020)
console.log(A)