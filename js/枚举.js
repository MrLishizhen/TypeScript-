//使用枚举给一组数值赋值名称
//可以通过名称去拿值 ，也可以通过值去拿名称
//如果没有赋值，第一个参数默认为0，后面的递增加一
//后面的值是看前面的值递增的所以four = 6
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 1] = "one";
    NumberType[NumberType["two"] = 2] = "two";
    NumberType[NumberType["three"] = 5] = "three";
    NumberType[NumberType["four"] = 6] = "four";
})(NumberType || (NumberType = {}));
//手动赋值时尽量不要使用重复的值
// enum NumberType{
//     one = 2,
//     two = 1,
//     three, // 2
//     four
// }
console.log(NumberType);
//枚举的类型有常数项（constant member）和计算所得项（computed member）
//计算所得项需要放置在已经确定赋值的枚举项之前，后面不能存放未手动赋值的枚举项
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 'blue'.length] = "blue";
    Color[Color["green"] = 11] = "green";
})(Color || (Color = {}));
//常数枚举是使用 const enum 定义的枚举类型
//常数枚举与普通枚举的区别是，她在编译阶段会被删除，并且不能包含计算成员
console.log(0 /* Obj.o */);
console.log(1 /* Obj.b */);
console.log(20 /* Obj.j */);
console.log(ABC.a);
console.log(1 /* ABCD.b */);
//编译后
// console.log(1 /* ABCD.b */);
