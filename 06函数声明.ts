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
function add(a:number,b:number):number{
    return a+b
}

console.log(add(1,2))

let c:number = add(1,2)
console.log(c)

//函数表达式
let add2 = function(a:number,b:number):number{
    return a+b
}

//完整写法
let add3:(a:number,b:number)=>number = function(a:number,b:number):number{
    return a+b
}

//可选和默认参数

let getName = function(x:string = '李',y?:string):string{
    return x+y
}
//可选参数不能位于必选参数的后面
console.log(getName('zhang'));
// console.log(getName('zhang','san'));


// 剩余参数

let getName1 = function(x:string = '李',y:string, ...rest:number[]):string{
    console.log(rest)
    return x+y
}
//可选参数不能位于必选参数的后面
console.log(getName1('zhang','',1,2,345678));

// 函数重载 ：函数名相同，形参不同的多个函数
//数字 相加， 字符串 拼接
//函数重载声明 ，可以使用重载定义多个newAdd的类型
function newadd(a:string,b:string):string
function newadd(a:number,b:number):number
//函数实现
function newadd(a:string|number,b:string|number):string|number{
    if(typeof a ==='string' &&typeof b=== 'string'){
        return a + b
    } 
    else if(typeof a ==='number' &&typeof b=== 'number'){
        return a+b
    } 
}

newadd(1,2)
newadd('齐天大圣','孙悟空')