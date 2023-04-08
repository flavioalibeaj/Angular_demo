"use strict";
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 4));
const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
console.log(subtractNumbers(5, 3));
const multiply = (num1, num2, num3) => {
    return num3 ? num1 * num2 * num3 : num1 * num2;
};
console.log(multiply(10, 4, 3));
console.log(multiply(10, 4));
const addAgain = (num1, num2, ...num3) => {
    return num1 + num2 + num3.reduce((min, max) => min + max);
};
let myArr = [1, 2, 3, 4, 5];
console.log(addAgain(5, 10, ...myArr));
console.log(addAgain(5, 10, ...[1, 2, 3, 4, 5]));
const getItems = (items) => {
    return new Array().concat(items);
};
let concatString = getItems(["Flavio", "Felix"]);
console.log(concatString);
let concatNumbers = getItems([1, 2, 3]);
console.log(concatNumbers);
