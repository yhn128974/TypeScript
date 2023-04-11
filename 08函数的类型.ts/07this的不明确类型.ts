// this 是可以被推导出来的

// 明确指明this的类型
type ThisType = { name: string }
function eating(this: ThisType, message: string) {
    console.log(this.name + 'eating', message);
}

const info = {
    name: "longyou",
    eating: eating
}

info.eating(`hhh`)

eating.call({ name: "longyou1" }, `hhhh`)
eating.apply({ name: "longyou2" }, [`dfdfdf`])
export { }


