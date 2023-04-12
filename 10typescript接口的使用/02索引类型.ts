// 通过interface定义索引类型
interface IndexLangue {
    [index: number]: string;
}
const fontLanguage: IndexLangue = {
    0: "HEML",
    1: "CSS",
    2: "JS",
    3: "VUE",
    //象字面量只能指定已知属性，并且“"ABC"”不在类型“IndexLangue”中。
    // "ABC": "CBA"
}

interface Ilanguageyear {
    [name: string]: number
}

const languageYear: Ilanguageyear = {
    "c": 1972,
    "java": 1995,
    "JavaScript": 1996,
    "Typescript": 2014
}

