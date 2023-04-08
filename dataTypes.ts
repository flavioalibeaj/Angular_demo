let fname: string = "Flavio"

let newName: string = fname.toUpperCase()

console.log(newName)

let age: number = 23

console.log(age)

let isValid: boolean = true

console.log(isValid)

let employeeList: string[] = ["Flavio", "John", "Felix"]

let person = employeeList.find(employee => employee === "Flavio")
console.log(person)

let salaryList: Array<number> = [100, 150, 200, 250, 300]

let bigSalary = salaryList.filter((num) => num>=150)
console.log(bigSalary)

let sum = salaryList.reduce((min, max)=> min+max)
console.log(sum)

const enum Colors {
    red,
    green,
    blue
}

let greenColor: Colors = Colors.green
console.log(greenColor)

let swapNumber: Array<number> 
// let swapNumber: [firstNum: number, secondNum: number]
function swapNumbers(num1: number, num2: number): [number, number]{
    return [num2, num1]
}

swapNumber = swapNumbers(100,200)
console.log(swapNumber)
console.log(swapNumber[0])
console.log(swapNumber[1])