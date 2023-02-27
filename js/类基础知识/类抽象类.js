// abstract 用于定义抽象类和其中的抽象方法
//限制子类中的属性和方法
class Y {
}
//不能被实例化
class Z extends Y {
    constructor(name) {
        super();
        this.name = name;
    }
    //在子类中去具体实现抽象类中的抽象方法
    sayHi() {
        console.log('hi');
    }
    aaa() {
        console.log(123);
    }
}
const z = new Z("张三");
console.log(z.name);
z.sayHi();
