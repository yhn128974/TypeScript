// 相同属性和type的区别

// 接口可以重名
interface IFoo {
    name: string
}

interface IFoo {
    age: number
}

const foo: IFoo = {
    name: "foo",
    age: 16
}

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// interface Window {
//     age: number
// }

// window.age = 19;
// console.log(window.age);



