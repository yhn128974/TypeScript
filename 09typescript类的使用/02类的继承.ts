class Person {
    name: string

    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    eating() {
        console.log(this.name + "is eating");
    }

}

class Student extends Person {
    sno?: string
    constructor(name: string, age: number, sno?: string,) {
        super(name, age);
        this.sno = sno;
    }
    eating(): void {
        super.eating()
        console.log(this.name + "student" + " eating");
    }
    studying() {
        console.log(this.sno + "is studying")
    }
}

class Teacher extends Person {
    title?: string
    constructor(name: string, age: number, title?: string) {
        super(name, age);
        this.title = title;
    }

    teaching() {

        console.log(this.name + "is teaching")
    }
}

let name1 = "longyou";
let name2 = "ethanyu";
let age = 20;
let age2 = 90;
let sno = "124";
let title = "教授"

const t1 = new Student(name1, age, sno);
const t2 = new Teacher(name2, age2, title);

console.log(t1.studying(), t1.eating());
console.log(t2.teaching(), t2.eating());


export {

}