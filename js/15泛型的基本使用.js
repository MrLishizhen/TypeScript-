// 泛型是指在定义函数、接口或类的时候
/*
需求 ：定义一个函数，传入两个参数，第一个参数是数据，第二个是数量
函数的作用：根据数量产生对应的个数的数据，存放在一个数组中

(123,3) ----> [123,123,123]
*/
function getArr(value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}
//使用泛型是，在定义时不需要先确定类型，而是使用的时候再去确定
//如果没有确定的话，就会走类型推断
console.log(getArr(123, 3));
console.log(getArr('123', 3));
