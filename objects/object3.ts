interface studentdata  //roughdata
{
    studid:number,
    studname:String,
    studrollno:number,
    studclass:string,
    studpass:boolean,
    exammarks:
    {
        Telugu:number,
        English:number,
        maths:number,
        science:number,
        social:number
    }
}
let studentinfo:studentdata=
{
    studid:23467,
    studname:"Deepika",
    studrollno:10,
    studclass:"Eigth",
    studpass:true,
    exammarks:
    {
        Telugu:40,
        English:45,
        maths:47,
        science:38,
        social:48
    }
}

console.log(studentinfo.exammarks)