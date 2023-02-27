//存取器，帮助我们控制对对象成员的访问
class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 设置存取器
    //读取器---》用来读取数据
    get fullname() {
        return this.firstName + '-' + this.lastName;
    }
    //设置器---》用来设置数据
    set fullname(value) {
        console.log(value);
        let names = value.split('-');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
const n = new Name('张', '三');
n.fullname = '张-三丰';
console.log(n.fullname);
