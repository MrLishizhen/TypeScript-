// 定义一个函数，获取一个数字或者字符串的长度

function getLength(x:string|number):number{
    if((x as string).length ){
        return (<string>x).length
    }else{
        return x.toString().length
    }
}

console.log(getLength('123'))
console.log(getLength(123))

//将任何类型断言为 any，any类型是访问任何属性和方法的
//它既有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any
//一方面不能滥用 as any ，另一方面也不要完全否定他的作用，我们需要在类型的严格性
//和开发的便利性之间掌握平衡

// (window as any).a=10

//将 any 断言为一个具体的类型
function abc(x:any,y:any):any {
    return x + y
}
let ab = abc(1,2) as number
