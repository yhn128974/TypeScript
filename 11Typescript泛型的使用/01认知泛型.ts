// function sum(num1: number | string | any[] | { lenght: number }, num2: number | string | any[] | { lenght: number }) {
//     // return num1 + num2;
// }

// 定义这个函数时，我们不决定这些参数的类型
function sum<T>(num: T): T {
    return num;
}

// 在调用时以参数的形式告知 
// 1.明确传入类型
console.log(sum<number>(10));
console.log(sum<string>(`longyou`));

// 2.自动类型推导
console.log(sum(10));
console.log(sum('longyou'));

