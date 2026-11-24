function districtdata(dname:string):void
{
    console.log(dname)
}
districtdata("anantapur")

function districtvillages( village:(name:string)=> void):void
{
    village("Atmakur")
}
districtvillages(districtdata)