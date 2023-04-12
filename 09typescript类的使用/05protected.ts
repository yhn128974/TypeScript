class Person {
    protected name: string = ""
    constructor(name: string) {
        this.name = name
    }
    getname(): string {
        return this.name
    }
    setname(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }
    getname(): string {
        return this.name + " Student"
    }
}

const s1 = new Student("longyou");
console.log(s1.getname());

// 属性“name”受保护，只能在类“Person”及其子类中访问。
// console.log(p.name);

export {

}