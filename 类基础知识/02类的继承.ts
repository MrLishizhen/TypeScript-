//扩展现有的类，通过继承
//继承：类与类之间的关系
class Animal{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(str:string) {
        console.log('hi'+str)
    }
}
// extends super
class Dog extends Animal{
    constructor(name: string, age: number) {
        //调用父类的构造函数，使用的super
        super(name,age)
    }
    //可以调用父类的方法
    sayHi() {
        console.log('这是dog类的say方法')
        super.sayHi('够够')
    }
}

const a = new Animal('小猫', 3)
a.sayHi('小猫')

const d = new Dog('拉布拉多', 4)
d.sayHi() 

// 总结：类与类之间存在继承关系，通过extends进行继承
//子类中可以调用父类的方法，使用super
//子类可以重写父类中的方法