interface User {
    name: string
    age: number
    id: number
    address: Address
}

interface Address {
    street: string
    city: string
    state: string
    ip: number
}

class WorkEmployees {
    empInfo: User

    constructor(empInfo: User) {
        this.empInfo = empInfo
    }
}

let firstWorker = new WorkEmployees(
    {
        name: "John Doe",
        age: 20,
        id: 1,
        address: { street: "10th St", city: "Buffalo", state: "New York", ip: 12345 }
    },
)

console.log(firstWorker)