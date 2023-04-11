//没有对吃否传入的参数进行校验
//没有对参数的类型进行限制
function foo(message) {
  console.log(message.length);
}

foo("lonfyou");
foo(123);

console.log("Can i read this message? ");
