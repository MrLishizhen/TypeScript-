class Car{
    name: string
    constructor(name: string) {
        this.name = name
        
    }
}

class Ben extends Car{
    constructor(name) {
        super(name)

    }
}

const car: Car = new Car('')
const ban: Ben = new Ben('')