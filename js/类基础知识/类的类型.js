class Car {
    constructor(name) {
        this.name = name;
    }
}
class Ben extends Car {
    constructor(name) {
        super(name);
    }
}
const car = new Car('');
const ban = new Ben('');
