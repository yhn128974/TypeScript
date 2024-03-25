function calc(
  n1: number,
  n2: number,
  fn: (num1: number, num2: number) => number
) {
  return fn(n1, n2);
}

const result1 = calc(10, 20, (a, b) => {
  return a + b;
});

const result2 = calc(10, 20, (a, b) => {
  return a * b;
});

console.log(result1);
console.log(result2);
