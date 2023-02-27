class Person2<T>{
    name: string
    age: T
    constructor(name: string, age: T) {
        this.name = name
        this.age = age
        
    }
}

const p11 = new Person2<number>('123', 18)
const p13 = new Person2<string>('123', '18')