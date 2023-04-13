

// 接口参数的泛型
interface IPerson<T1, T2> {
    name: T1,
    age: T2,
}

// 接口参数泛型的默认值
interface IPerson<T1 = string, T2 = string> {
    name: T1,
    age: T2,
}

const p: IPerson<number, string> = {
    name: 1000,
    age: 'longyou',
}

export {

}