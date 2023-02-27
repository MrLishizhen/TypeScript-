interface ISing{
    sing()
}

interface IDance{
    dance()
}
class P implements ISing,IDance{ //人，唱歌 ，跳舞
    sing() {
        console.log('唱歌')
    }
    dance() {
        console.log('跳舞')
    }
}
class An implements ISing,IDance{//动物，唱歌，跳舞
    sing() {
        console.log('唱歌')
    }
    dance() {
        console.log('跳舞')
    }
}

const p1 = new P()
const an = new An()

p1.sing()
an.sing()
p1.dance()
an.dance()