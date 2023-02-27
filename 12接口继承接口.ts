interface IRun{
    run()
}

interface ISwim{
    swim()
}
//接口可以继承其他的接口
interface IActive extends IRun, ISwim{
    
}

class I implements IActive{
    run() {
        
    }
    swim() {
        
    }
}