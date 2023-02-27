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
const getArr1 = function (value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
};
console.log(getArr1('123', 3));
let p12 = {
    name: 123
};
let p22 = {
    name: '123'
};
