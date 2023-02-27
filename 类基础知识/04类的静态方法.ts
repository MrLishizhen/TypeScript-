//静态方法
//静态属性
//类自己的属性和方法
class A{
    static name1: string
    // constructor(name: string) {
    //     this.name = name
        
    // }
    static sayHi() {
        console.log('hi')

    }
}

// static 设置静态属性和静态方法
const a1 = new A()
// console.log(a1.name1)
console.log(A.name1)
A.sayHi()
// a1.sayHi()