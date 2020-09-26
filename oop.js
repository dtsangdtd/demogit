class Student {
    constructor(_name) {
        this.name = _name;

    }
}
const student = new Student("Nguyen");
console.log(student.name);

class Mother {
    constructor(_name) {
        this.name = _name;
    }
    colorEyes() {
        console.log("red");
    }
}
class Me extends Mother {
    colorSkin() {
        console.log("Brow");
    }
}

const me = new Me("Nguyen");
me.colorEyes();
class Person {
    constructor(_name) {
        this.name = _name;
    }
    getName() {
        return this.name;
    }

}

class Monkey extends Person {
    getName() {
        return "Hello" + this.name;
    }
}
let monkey = new Monkey(" Khi");
console.log(monkey.getName());

class People {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfor() {
        console.log(`Ten: ${this.name} - tuoi : ${this.age}`);
    }
}

class Monkey2 extends People {
    constructor(_name, _age, _eat) {
        super(_name, _age);
        this.eat = _eat;
    }
    getInfor() {
        super.getInfor();
        console.log(`eat: ${this.eat}`);
    }
}

let monkey2 = new Monkey2("Khi2", "14", "chuoi");
monkey2.getInfor();

/**
 * import & export
 */