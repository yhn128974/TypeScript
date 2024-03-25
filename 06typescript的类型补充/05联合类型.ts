// string | number 联合类型
function printID(id: string | number | boolean): void {
  // 使用联合类型的值时，需要特别小心
  // narrow 缩小
  if (typeof id === "string") {
    // ts帮助我们确定id一定是string类型
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}

printID(123);
printID(`avx`);
printID(true);
