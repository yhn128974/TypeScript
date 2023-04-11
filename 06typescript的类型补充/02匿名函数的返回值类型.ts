// 一般情况下，在定义一个函数时，都会给参数加上类型注解
function foo(message:string) {
    
}

const names: string[] = ["foo", "bar", "baz"];

// 1
names.forEach(function name(name: string) {
    console.log(name);
})
// 2内部的匿名函数可以不用指明类型
names.forEach(function name(name) {
    console.log(name);
})
// 3 name根据上下文的环境推到出来，这个时候可以不添加类型注解
names.forEach((item)=> {
    console.log(item);
})


export {
    
}