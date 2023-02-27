// 表示取值可以为多种类型中的一种
//flag true ，flag 1
let f :boolean|number|string = true

f = 1
f = '123'
f = true
// console.log(f.split('')) 报错 ，重新赋值相当于进行了一次类型推断