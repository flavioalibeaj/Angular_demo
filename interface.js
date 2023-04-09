"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employees {
    constructor(name, age, id, address) {
        this.showInfo = () => {
            return `Hey my name is ${this.name}, I'm ${this.age} years old, my id number is ${this.id} and I live in ${this.address}`;
        };
        this.name = name;
        this.age = age;
        this.id = id;
        this.address = address;
    }
    login() {
        return { name: "John", id: 1, email: "" };
    }
}
let myself = new Employees("John", 33, 1, { street: "10th St", city: "Buffalo", state: "New York", ip: 12345 });
console.log(myself.showInfo());
