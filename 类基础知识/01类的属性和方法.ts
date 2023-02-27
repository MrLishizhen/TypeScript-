// 类：描述了所创建的对象共同的属性和方法
// 实例化对象
class Person{
    name: string
    age: number
    
    constructor(name:string,age:number) {
        this.name = name
        this.age = age

    }
    sayHi(str:string) {
        console.log('hi' + str)
    }
}
let p = new Person('张三',18)//new的时候，会执行类中的构造方法constructor
p.sayHi('李四')