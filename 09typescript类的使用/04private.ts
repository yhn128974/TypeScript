class Person {
    private name: string

    getname(): string {
        return this.name
    }

    setname(name: string) {
        this.name = name;
    }
}
const p = new Person();
// 属性“name”为私有属性，只能在类“Person”中访问
// console.log(p.name);

export {
    
}