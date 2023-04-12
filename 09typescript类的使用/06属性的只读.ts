class Person {
    readonly name: string
    age?: number
    readonly friend?: Person
    // 只读属性在构造器中赋值，赋值后不可以修改
    constructor(name: string, friend?: Person, age?: number) {
        this.name = name
        this.friend = friend
        this.age = age
    }
}

const p = new Person("123", new Person('456'));
console.log(p.name);
console.log(p.friend?.name);

// // 无法为“friend”赋值，因为它是只读属性。ts(2540)
// p.friend=new Person("123")

//无法为“name”赋值，因为它是只读属性
if (p.friend) {
    p.friend.age = 30
}
console.log(p.friend?.age);
