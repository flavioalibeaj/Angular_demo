class Employee {
    id!: number

    name!: string

    address!: string
}

let firstEmp = new Employee()
firstEmp.id = 1
firstEmp.name = "Flavio"
firstEmp.address = "Tirane"

console.log(firstEmp)

class Workers {
    #id: number // Me # ose ose keyword private
    protected fname: string
    age: number
    static showText = () :string => {
        return `This is a static`
    }
    constructor(id: number, fname: string, age: number) {
        this.#id = id
        this.fname = fname
        this.age = age
    }

    set setId(int: number) {
        this.#id = int
    }

    get setId() : number{
        return this.#id
    }

    showInfo = (): string => {
        return `Hello my name is ${this.fname}, my id is ${this.#id} and I'm ${this.age} years old`
    }
}

let someWorker = new Workers(19, "John", 34)
console.log(someWorker.showInfo())

someWorker.setId = 100
console.log(someWorker.setId)

class Manager extends Workers{
    constructor(id: number, fname: string, age: number){
        super(id, fname, age)
    }
}

let manager = new Manager(42, "Laert", 23)
console.log(manager.showInfo())
console.log(Workers.showText())