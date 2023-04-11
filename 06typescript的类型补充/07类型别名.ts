// type 类型别名(type alias)修饰符

type UnionType = string | undefined | boolean;

type PointType = {
    x: number,
    y: number,
    z?: number
}

function printId(id: UnionType) {

}

function printPoint(pt: PointType) {

}
