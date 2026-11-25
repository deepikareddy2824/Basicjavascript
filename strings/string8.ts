let education :string="myschoolname is:montesssori123, myeducation:bsc@, job:software, location:hyd123@#$%^"

let mybackground:string="bachelor of computer science with maths statistics and computer science"


let removespecialchar:string=education.replaceAll(/[^a-zA-Z0-9]/g, " ")
console.log(removespecialchar)