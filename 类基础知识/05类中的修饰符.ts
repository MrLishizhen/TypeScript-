//public 修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是public的

// private 修饰的属性和方法是私有的，不能在类的外部访问,保存子类，但是属性和方法可以被继承

// protected 修饰的属性或方法是受保护的，他和private类似，区别是它在子类中也是允许被访问的


class B{
    // public name1: string //公有的属性
    private name1: string //私有的属性
    protected age: number //受保护的属性
    
    public constructor(name: string,age:number) {
        this.name1 = name
        this.age = age
        
    }

    public p() {
        console.log(this.name1,this.age)
    }
}

const b = new B('张三',12)
// console.log(b.name1) //属性“name1”为私有属性，只能在类“B”中访问。

class C extends B{
    constructor(name1: string,age:number) {
        super(name1,age)
    }
    play() {
        // console.log(this.name1) //属性“name1”为私有属性，只能在类“B”中访问
        console.log(this.age)
    }

}
const c1 = new C('张三丰',118)
c1.play()
// console.log(c.name1) //属性“name1”为私有属性，只能在类“B”中访问