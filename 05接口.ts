//一般首字母需要大写 I

//定义的变量比接口少(多)是不被允许的
// 可有可无的属性可以使用 ? 表示可选属性
interface Person{
    name:string,
    age:number,
    sex?:string
}

let tom:Person = {
    name:'孙悟空',
    age: 500,
    sayHi() {
        
    }
}

//但是还是不能添加没有的属性
// 任意属性
// 一个接口只能使用一个任意属性，如果有多个类型
// 可以使用联合类型

interface Personany {
    [propName:string]:string 
}

let tom3:Personany = {
    a:'1233'
}

//只读属性
interface Personread {
    readonly id :number
}
let tom2:Personread = {
    id:12
}
// tom2.id = 42 报错 提示id为只读属性


//数组类型
//这种方式不常用
interface INewArr{
    [index:number] :number//任意属性、index表示数组的下标 
}
let arr4 :INewArr = [1,2,3]

// 函数类型
//参数、返回值

interface ISearchFunc{
    //(参数：类型，...)：返回值类型
    (a:string,b:string):boolean
}
const fun1:ISearchFunc = function(a:string,b:string):boolean{
    return a.search(b)!==1
}