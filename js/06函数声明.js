//命名函数，命名函数
// function add(a,b){
//     return a+b
// }
// //函数表达式 ,匿名函数
// let add2 = function(a,b){
//     return a+b
// }
// ts 函数声明，命名函数
//a和b都是number类型
//：number表示该函数的返回值为number类型
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
let c = add(1, 2);
console.log(c);
//函数表达式
let add2 = function (a, b) {
    return a + b;
};
//完整写法
let add3 = function (a, b) {
    return a + b;
};
//可选和默认参数
let getName = function (x = '李', y) {
    return x + y;
};
//可选参数不能位于必选参数的后面
console.log(getName('zhang'));
// console.log(getName('zhang','san'));
// 剩余参数
let getName1 = function (x = '李', y, ...rest) {
    console.log(rest);
    return x + y;
};
//可选参数不能位于必选参数的后面
console.log(getName1('zhang', '', 1, 2, 345678));
//函数实现
function newadd(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
newadd(1, 2);
newadd('齐天大圣', '孙悟空');
