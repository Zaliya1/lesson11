class First {
    constructor(name){
        this.name = name;
        console.log('Меня зовут ' + name);
    }
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    constructor(name){
        super(name);
    }
    myHello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
}
const say = new Second('Залия');
console.log(say.myHello());