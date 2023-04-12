// 通过类型声明一个函数类型
type calfn = (n1: number, n2: number) => number
// 通过接口声明一个函数类型
interface Icalfn {
    (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calfn) {
    return calfn(num1, num2)
}

const add: calfn = (n1: number, n2: number,) => {
    return (n1 + n2)
}


function calc1(num1: number, num2: number, Icalfn) {
    return Icalfn(num1, num2)
}

const add1: Icalfn = (n1: number, n2: number,) => {
    return (n1 + n2)
}



console.log(calc(10, 20, add));
console.log(calc1(10, 20, add1));

export {

}