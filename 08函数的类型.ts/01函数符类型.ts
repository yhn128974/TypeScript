// 函数作为参数时，在参数中任何编写类型
function foo() {
  console.log("aaabbb");
}
// 定义一般变量为函数类型
type fun = () => void;

function bar(fn: fun) {
  fn();
}

bar(foo);

// 2 定义常量时，编写函数的类型
type funnumber = (num1: number, num2: number) => number;
const add: funnumber = (num1: number, num2: number) => {
  return num1 + num2;
};

export {};
