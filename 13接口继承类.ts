class NewPerson{
    name: string
    constructor(name: string) {
        this.name = name
        
    }
    sayHi() {
        console.log(123)
    }
}

interface IPerson extends NewPerson{//接口继承类中的实例属性和实例方法
    age:number
}
let person: IPerson = {
    name: '孙悟空',
    age: 18,
    sayHi:()=> {
        
    }
}
