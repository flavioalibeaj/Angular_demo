"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object destructuring
let { name: userName, email: userLogin } = { name: "John", id: 1, email: "" };
let someEmployee = { name: "Daisy", age: 32, id: 213, email: "", salary: 53433 };
// Array destructuring
let [user1, user2, ...rest] = [
    { name: "John", id: 1, email: "" },
    { name: "Joe", id: 3, email: "" },
    { name: "Jack", id: 5, email: "" },
    { name: "Bryce", id: 1123, email: "" },
    { name: "Paul", id: 343, email: "" }
];
console.log(user1);
console.log(user2);
console.log(...rest);
