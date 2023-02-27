let num = 12;
function abc2(a) {
    console.log(a);
}
abc2('123');
//基础数据类型
// 布尔值
let flag = true;
// flag = 123 //不能将类型“number”分配给类型“boolean”
//number 数字类型 可以赋值十进制 八进制  二进制 都是可以的
let a11 = 10; //十进制
let a111 = 0b1010; //二进制
let a2 = 0o12; // 八进制
//string 字符串类型
let str = '123';
// undefined和null,用的不多 ，可以赋值给其他类型的子类型。
let u = undefined;
let n1 = null;
let b1 = u; //赋值把u赋值给b  
//数组
let arr = [];
let arr_number = [123456, 15];
//定义数组 ，泛型
let arr2 = [1, 2];
//对象 object 非原始类型 除了number string，boolean之外的类型
let obj = {};
// obj = 123//报错
// obj = 456//报错
obj = null;
obj = undefined;
obj = [12];
obj = new String('123');
obj = String;
// any任何类型,缺点也会污染其他的数据
let h = 123;
h = '1232';
h = {};
h = [];
// 缺点 下方代码运行时会报错
let newArr = [100, 2, 30, '', true];
console.log(newArr[0].split(''));
// void 空值 表示没有任何返回值得函数
function aFunc() {
    console.log(123456);
}
console.log(aFunc());
