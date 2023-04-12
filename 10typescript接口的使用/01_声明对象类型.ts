//通过类型type 别名来声明对象类型
// type infotype={...}

// 通过接口interface来声明对象类型
interface IInfotype {
    readonly name: string;
    age?: number;
    friend?: {
        name: string;
    }
}

const info: IInfotype = {
    name: "lonfyou",
    age: 20,
    friend: {
        name: "ben",
    }
}

// info.name = "lon"
// info.age = 22




