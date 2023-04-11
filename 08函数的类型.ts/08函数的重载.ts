

type typefn = number | string

// 联合类型的缺点
// 1.进行很多的逻辑判断（类型缩小
// 2.返回值的类型依然是不能确定的
function add(a1: typefn, a2: typefn) {
    if (typeof a1 === 'number' && typeof a2 === 'number') {
        return a1 + a2;
    }
    if (typeof a1 === 'string' && typeof a2 === 'string') {
        return a1 + a2;
    }
}

add(1, 2)

