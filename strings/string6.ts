let education :string="myschoolname is:montesssori123, myeducation:bsc@, job:software, location:hyd123@#$%^"

let mybackground:string="bachelor of computer science with maths statistics and computer science"



let removealpha:string=education.replaceAll(/[a-z]/g, " ")
console.log(removealpha)
