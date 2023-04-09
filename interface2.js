"use strict";
class WorkEmployees {
    constructor(empInfo) {
        this.empInfo = empInfo;
    }
}
let firstWorker = new WorkEmployees({
    name: "John Doe",
    age: 20,
    id: 1,
    address: { street: "10th St", city: "Buffalo", state: "New York", ip: 12345 }
});
console.log(firstWorker);
