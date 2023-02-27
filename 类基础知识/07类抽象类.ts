// abstract 用于定义抽象类和其中的抽象方法
//限制子类中的属性和方法

abstract class Y{
    abstract name: string
    // constructor(name: string) {
    //     this.name = name//不能在构造函数中访问类“Y”中的抽象属性“name”
    // }
    abstract sayHi() //方法“sayHi”不能具有实现，因为它标记为抽象。
        
    
}

//不能被实例化

class Z extends Y{
    name: string
    constructor(name:string) {
        super()
        this.name = name
    }
    //在子类中去具体实现抽象类中的抽象方法
    sayHi() {
        console.log('hi')
    }
    aaa() {
        console.log(123)
    }
}


const z = new Z("张三")
console.log(z.name)
z.sayHi()