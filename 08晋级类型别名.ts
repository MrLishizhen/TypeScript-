type s = string; //类型起别名
let str1:s = '123'

//类型别名常用在联合类型中
type all = string| number | boolean
let all1:all = 123
let all2:all = true

// 字符串字面量类型
//用来约束取值只能是某几个字符串中的一个

// 张三丰、张三、张大炮

type stringType = '张三丰'|'张三'|'张大炮'
let names:stringType = '张三丰'