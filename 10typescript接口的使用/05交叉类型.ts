// 交叉类型：联合类型组合接口类型，可实现选择继承和联合继承


// 一种组合方式：联合类型
type longtype = number | string
type Direction = "left" | "right" | "center" | "top" | "bottom"

// 另一种 交叉类型
type wlongyou = number & string;

interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

interface IAction extends ISwim, IFly {

}

// 通过接口合并实现多继承
const obj: IAction = {
    swimming() {

    },
    flying() {

    }
}


type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj2: MyType1 = {
    swimming() {

    }
}
// 通过类型合并实现多继承
const obj3: MyType2 = {
    swimming() {

    },
    flying() {

    }
}


export {

}