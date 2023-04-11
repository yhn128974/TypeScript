// this 是可以被推导出来的
function eating() {
    console.log(this.name + 'eating');
}

const info = {
    name: "longyou",
    eating: eating
}

info.eating()

export { }


