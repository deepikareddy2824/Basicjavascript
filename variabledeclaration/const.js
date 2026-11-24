const company = 'HCL'
console.log(company)

company = 'TCS' //reassign
console.log(company)

const company = 3456 //redeclared
console.log(company)

{
    console.log(company) // outside data acessing inside block
    const mycompany = "cognizant" // inside data acessing inside block
    console.log(mycompany)
}
console.log(mycompany) //inside block data acessing to outside data