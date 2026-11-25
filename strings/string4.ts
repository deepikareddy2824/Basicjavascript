let education :string="myschoolname is:montesssori123, myeducation:bsc@, job:software, location:hyd123@#$%^"

let mybackground:string="bachelor of computer science with maths statistics and computer science"

let newbackground: string= mybackground.replaceAll("is", "of")

console.log(newbackground)

let replacenumber:string=education.replace(/[0-9]/g, " ")
console.log(replacenumber)

let removealpha:string=mybackground.replaceAll(/[a-z]/g, " ")
console.log(removealpha)
let removespecial:string=mybackground.replaceAll(/[a-zA-Z0-9]/g, " ")
console.log(removespecial)

let removespecialchar:string=mybackground.replaceAll(/[^a-zA-Z0-9]/g, " ")
console.log(removespecialchar)