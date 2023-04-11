//<img scr="longyou"> 

// 类型断言 as
const el = document.getElementById('longyou') as HTMLImageElement
el.src = "http://..."


class Person {

}

class Student extends Person {
    studying() {

    }
}


function syaHello(p: Person) {
    // 类型断言
    (p as Student).studying
}

const stu = new Student();
syaHello(stu)

// 
const message = "Hello!"
const num: number = (message as any) as number

console.log(num);
