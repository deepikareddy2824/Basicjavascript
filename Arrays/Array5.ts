let names1:string[]=["deepu",'lucky',"sweety","pinky",'bujji',"kanna"]
let names2:string[]=["devi","vamsi",'vishnu',"madhu","somnath",'suresh']
let names:string[]=names1.concat(names2)
let name:string[]=names2.concat(names1) // concat (2 strings)process
console.log(names)
console.log(name)