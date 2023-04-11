// 元组数据类型tuple：多种元素的组合
const info1: any[] = ["longyou", 10, 1.88]
// 类型不是我们想要的
const name1 = info1[0];

console.log(name1);

// 元组的特点
const info2: [string, number, number] = ['string', 12, 1.99]
const name2 = info2[0];
const age1 = info2[1];
console.log(name2.length);

//类型“number”上不存在属性“length”。ts(2339)
// console.log(age1.length);

export{}

