function foo(){
    return 'abc';
}

function bar() {
    return 123
}

let flag = false;
// unknown只能赋值给any和unknow
// any 可以赋值给任意数据类型
let result:unknown;

if (flag) {
    result=foo()
} else {
    result=bar()
}

// 不能将类型“unknown”分配给类型“string”。不能破坏原来属性的固有类型
// let message1: string = result;

// any 可以赋值给任意数据类型，这么做会破坏原来属性的固有类型
// let message1: any = result;
// console.log(message1);



console.log(result);
console.log(typeof result);


export { }


