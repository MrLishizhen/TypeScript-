let num:number = 12;

function abc2(a:string){
    console.log(a)
}

abc2('123')

//基础数据类型
// 布尔值
let flag:boolean = true;
// flag = 123 //不能将类型“number”分配给类型“boolean”

//number 数字类型 可以赋值十进制 八进制  二进制 都是可以的
let a11:number = 10//十进制
let a111:number = 0b1010 //二进制
let a2:number = 0o12 // 八进制

//string 字符串类型

let str:string = '123'

// undefined和null,用的不多 ，可以赋值给其他类型的子类型。
let u:undefined = undefined;
let n1:null = null; 

let b1:number = u//赋值把u赋值给b  

//数组
let arr:[] = []
let arr_number: number[] = [123456,15]

//定义数组 ，泛型
let arr2:Array<number> = [1,2]

//对象 object 非原始类型 除了number string，boolean之外的类型
let obj:object = {}
// obj = 123//报错
// obj = 456//报错

obj = null
obj = undefined
obj = [12]
obj = new String('123')
obj = String

// any任何类型,缺点也会污染其他的数据

let h:any = 123
h = '1232'
h={}
h=[]

// 缺点 下方代码运行时会报错
let newArr:any[] = [100,2,30,'',true]
console.log(newArr[0].split(''))

// void 空值 表示没有任何返回值得函数

function aFunc():void{
    console.log(123456)
}
console.log(aFunc());
