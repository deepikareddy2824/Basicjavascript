function studentinfo(sdata:string, spercentage:number):void
{
    if(spercentage>=90)
    {
        console.log("students gets scholarship :" + spercentage)
    }
    else
    {
        console.log("students will not get scholarship")
    }
}
studentinfo("maths", 77)
studentinfo("maths", 94)
