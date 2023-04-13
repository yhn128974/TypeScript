class Point<T> {
    x: T;
    y: T;
    z?: T;

    constructor(x: T, y: T, z?: T) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const p = new Point("123", "34", "34");
const p1 = new Point<string>("123", "34", "34");
const p2: Point<string> = new Point("123", "34", "34");

const name1: string[] = ["abc", 'cba', 'nasd']
 const name2: Array<string> = ["abc", 'cba', 'nasd']// 不推荐

export {

}