class Person {
    private _name: string
    constructor(name: string) {
        this._name = name;
    }
    // 使用自定义方法
    // setName(name: string) {
    //     this.name = name;
    // }
    // getName() {
    //     return this.name
    // }

    // set get 访问器
    set name(newName: string) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
}

const p = new Person("longyou");

//属性“name”为私有属性，只能在类“Person”中访问。ts(2341)
// console.log(p.name);

p.name = "ethanyu"
console.log(p.name);

export {

}