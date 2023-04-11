
// 联合类型实现
// function getLenght(arg: string | any[]) {
//     return arg.length
// }

// console.log(getLenght(["sd", "sd", "sd"]));
// console.log(getLenght("longyou"));


// 函数的重载 当使用联合类型可以有唯一的返回值时使用联合类型会比函数重载更加方便
function getLenght(arg: string): number;
function getLenght(arg: any[]): number;

function getLenght(arg: any): number {
    return arg.length
}
console.log(getLenght(["sd", "sd", "sd"]));
console.log(getLenght("longyou"));
export {

}