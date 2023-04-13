// namespace  命名空间
export namespace time {
    export function format(time: string) {
        return "2022-22-22"
    }

    export function foo() {

    }

    export let name: string = 'abc'
}

namespace peice {
    export function format(peice: number) {
        return '999.0'
    }
}

time.format("34")
time.foo()
time.name
