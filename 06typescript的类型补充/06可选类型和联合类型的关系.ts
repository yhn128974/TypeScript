

function foo1(message?: string) {
    console.log(message);
}

function foo2(message: string | undefined) {
    console.log(message);
}

// 当一个参数是可选类型的时候，他类型于一个联合了undefind的联合类型

foo1(`123`)
foo2(`123`)

foo1()
foo2(undefined)
export { }
