// 函数重载 当使用联合类型不能确定参数的时候使用

function add(num1: number, num2: number): number //没有函数体

function add(num1: string, num2: string): string

function add(num1: string, num2: number): string
// any函数体
function add(num1: any, num2: any): any {
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.length + num2.length
    }
    return num1 + num2;
}

// add(10, 20)
console.log(add(10, 20));

console.log(add("1", "2"));

console.log(add("34", 34));

// add({ name: "longyou" }, { age: 10 })
export {

}