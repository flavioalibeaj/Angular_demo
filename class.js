"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Workers_id;
class Employee {
}
let firstEmp = new Employee();
firstEmp.id = 1;
firstEmp.name = "Flavio";
firstEmp.address = "Tirane";
console.log(firstEmp);
class Workers {
    constructor(id, fname, age) {
        _Workers_id.set(this, void 0); // Me # ose ose keyword private
        this.showInfo = () => {
            return `Hello my name is ${this.fname}, my id is ${__classPrivateFieldGet(this, _Workers_id, "f")} and I'm ${this.age} years old`;
        };
        __classPrivateFieldSet(this, _Workers_id, id, "f");
        this.fname = fname;
        this.age = age;
    }
    set setId(int) {
        __classPrivateFieldSet(this, _Workers_id, int, "f");
    }
    get setId() {
        return __classPrivateFieldGet(this, _Workers_id, "f");
    }
}
_Workers_id = new WeakMap();
Workers.showText = () => {
    return `This is a static`;
};
let someWorker = new Workers(19, "John", 34);
console.log(someWorker.showInfo());
someWorker.setId = 100;
console.log(someWorker.setId);
class Manager extends Workers {
    constructor(id, fname, age) {
        super(id, fname, age);
    }
}
let manager = new Manager(42, "Laert", 23);
console.log(manager.showInfo());
console.log(Workers.showText());
