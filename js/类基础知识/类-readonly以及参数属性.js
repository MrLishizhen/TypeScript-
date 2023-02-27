class X {
    //只读属性，但是在构造函数中是可以修改的
    //readonly以及三个修饰符定义在参数上，那就是创建并且初始化age参数
    constructor(age) {
        this.age = age;
        // this.age = age
    }
    updata() {
        //this.age = 1 //无法为“age”赋值，因为它是只读属性
    }
}
const x = new X(13);
// x.age = 16 //无法为“age”赋值，因为它是只读属性。
