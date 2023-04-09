export interface Users {
    name: string
    age?: number //? = Optional
    id: number
    email: string
}

// Object destructuring
let {name: userName, email: userLogin}: Users = {name: "John", id: 1, email: ""} 

interface FactoryWorkers extends Users{
    salary: number
}

let someEmployee: FactoryWorkers = {name: "Daisy", age: 32, id: 213, email: "", salary: 53433}

export interface LogIn {
    login(): Users
}

// Array destructuring
let [user1, user2, ...rest]: Array<Users> = [
    {name: "John", id: 1, email: ""},
    {name: "Joe", id: 3, email: ""},
    {name: "Jack", id: 5, email: ""},
    {name: "Bryce", id: 1123, email: ""},
    {name: "Paul", id: 343, email: ""}
]
console.log(user1)
console.log(user2)
console.log(...rest)