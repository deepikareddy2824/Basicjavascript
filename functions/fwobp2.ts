function mydata(mname:string, education:string):void
{
    if(education==undefined)
    {
        console.log("User is buying a phone with mname is:"+ mname)
    }
    else
    {
        console.log("user want to give mname is :"+ mname)
        console.log("User want to apply a job having education background:"+ education)
    }
}
mydata("deepu");
mydata("deepika",'Bsc');