class Person {
    name: string = "123"
    eat() {
        console.log(this.name + "eating");
    }
}

const p = new Person();


// 类类型 
const p1: Person = {
    name: "longyou",
    eat() {
        console.log(this.name + "eating");
    }
}

function printPerson(p: Person) {
    console.log(p.name);
}

printPerson(new Person())
printPerson({
    name: "longyou1",
    // 对象字面量只能指定已知属性，并且“age”不在类型“Person”中。
    // age:20,
    eat() {
        console.log('new eating');
    }
})
export {

}