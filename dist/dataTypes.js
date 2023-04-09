"use strict";
let fname = "Flavio";
let newName = fname.toUpperCase();
console.log(newName);
let age = 23;
console.log(age);
let isValid = true;
console.log(isValid);
let employeeList = ["Flavio", "John", "Felix"];
let person = employeeList.find(employee => employee === "Flavio");
console.log(person);
let salaryList = [100, 150, 200, 250, 300];
let bigSalary = salaryList.filter((num) => num >= 150);
console.log(bigSalary);
let sum = salaryList.reduce((min, max) => min + max);
console.log(sum);
let greenColor = 1 /* Colors.green */;
console.log(greenColor);
let swapNumber;
// let swapNumber: [firstNum: number, secondNum: number]
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumber = swapNumbers(100, 200);
console.log(swapNumber);
console.log(swapNumber[0]);
console.log(swapNumber[1]);
