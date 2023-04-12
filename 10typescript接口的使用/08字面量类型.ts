interface IPerson {
    name: string,
    age: number,
    height: number,
}
const info = {
    name: "longyou",
    age: 18,
    height: 1.88,
    address: '上海',
    sex: "boy"
}
// const p: IPerson={
//     name: "longyou",
//     age: 18,
//     height: 1.88,
//     address: '上海'
// }
// 在使用引用类型给规定类型赋值时会产生擦除操作 freshness  所以多出来的属性也不会报错
const p: IPerson = info
console.log(info);
console.log(p);





