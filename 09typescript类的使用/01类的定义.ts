class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eating() {
        console.log(this.name + "eating");
    }
}

let name = "John";
let age = 10

const p = new Person(name, age);
p.eating()
export {

}