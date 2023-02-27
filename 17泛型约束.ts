/*
获取参数的长度
泛型约束，约束这个任意输入的类型，必须要有length
*/
interface ILength{
    length:number
}
function getLengths<T extends ILength>(x:T): number{
    return x.length
}

console.log(getLengths('123'))