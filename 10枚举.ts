//使用枚举给一组数值赋值名称
//可以通过名称去拿值 ，也可以通过值去拿名称
//如果没有赋值，第一个参数默认为0，后面的递增加一
//后面的值是看前面的值递增的所以four = 6
enum NumberType{
    one = 1,
    two = 2,
    three = 5,
    four
}
//手动赋值时尽量不要使用重复的值

// enum NumberType{
//     one = 2,
//     two = 1,
//     three, // 2
//     four
// }
console.log(NumberType)

//枚举的类型有常数项（constant member）和计算所得项（computed member）
//计算所得项需要放置在已经确定赋值的枚举项之前，后面不能存放未手动赋值的枚举项

enum Color{
    red,
    blue = 'blue'.length,//从这往后的枚举项都得有默认赋值
    green = 11
}

const enum Obj{
    o,b,j=10+10
}
//常数枚举是使用 const enum 定义的枚举类型
//常数枚举与普通枚举的区别是，她在编译阶段会被删除，并且不能包含计算成员

console.log(Obj.o)
console.log(Obj.b)
console.log(Obj.j)
//编译后Obj会消失 但是 会给出出处
// console.log(0 /* Obj.o */);
// console.log(1 /* Obj.b */);
// console.log(2 /* Obj.j */);


//外部枚举（Ambient Enums） 是使用declare enum 定义的枚举类型
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除
declare enum ABC{
    a,b,c

}

console.log(ABC.a)
//编译后 ABC会被删除
// console.log(ABC.a);

// 也可以和常数枚举结合

declare const enum ABCD{
    a,b,c,d
}
console.log(ABCD.b)
//编译后
// console.log(1 /* ABCD.b */);