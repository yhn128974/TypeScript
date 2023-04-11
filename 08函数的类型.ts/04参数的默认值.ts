// 可参数赋默认值
// 一般顺序为 必传参数-》默认值参数=》可选参数
// function foo(x: number, y: number = 100) {
//     console.log(x, y);
// }


function foo(x: number = 20, y: number = 100) {
    console.log(x, y);
}


foo(undefined, 20)
