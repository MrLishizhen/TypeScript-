/*
函数合并 ---》函数重载
接口合并
合并的属性类型必须是唯一的
height为 number  则下面的都是 number
*/

interface Alaem{
    height:number
}
interface Alaem{
    height:number,
    width:26
}

const cat:Alaem={width:26,height:32}