// interface IArr{
//     <T>(value:T,count:number):Array<T>
// }
// const getArr1:IArr=function <T>(value: T, count: number): T[]{
//     const arr: T[] = []
//     for (let i = 0; i < count; i++){
//         arr.push(value)
//     }
//     return arr
// }


interface IArr<T>{
    (value:T,count:number):Array<T>
}
const getArr1:IArr<string>=function <T>(value: T, count: number): T[]{
    const arr: T[] = []
    for (let i = 0; i < count; i++){
        arr.push(value)
    }
    return arr
}

console.log(getArr1('123', 3))


interface IPerson1<T>{
    name: T
}

let p12: IPerson1<number> = {
    name: 123
}
let p22: IPerson1<string> = {
    name: '123'
}