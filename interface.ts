import {LogIn, Users} from "./interface3"


interface User {
    name: string
    age: number
    id: number
}

interface Address {
    street: string
    city: string
    state: string
    ip: number
}

class Employees implements LogIn{
    name: string
    age: number
    id: number
    address: Address

    constructor(name: string, age: number, id:number, address: Address){
        this.name = name
        this.age = age
        this.id = id
        this.address = address
    }

    login(): Users {
        return {name: "John", id: 1, email: ""} 
    }

    showInfo = () :string => {
        return `Hey my name is ${this.name}, I'm ${this.age} years old, my id number is ${this.id} and I live in ${this.address}`
    }
}

let myself = new Employees ("John", 33, 1, {street: "10th St", city: "Buffalo", state: "New York", ip: 12345})
console.log(myself.showInfo())

