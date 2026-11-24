function empinfo(empid:number, empname:string, emprole:string, stillworking:boolean): void
{
    console.log("Is employee is still working:"+ stillworking)
    return empname;
}

console.log(empinfo(20182,"deepika","QA",true))