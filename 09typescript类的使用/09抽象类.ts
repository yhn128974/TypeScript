

function makeArray(shape: Rectangle | Circle) {
    return shape.getArea();
}

// 抽象类
abstract class Shape {
    abstract getArea()
}

class Rectangle extends Shape {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        super()
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._width * this._height * 0.5;
    }

}


class Circle extends Shape {
    private _r: number;
    constructor(r: number) {
        super()
        this._r = r
    }
    getArea() {
        return 3.14 * this._r * this._r
    }
}

const rectangle = new Rectangle(200, 100);
const circle = new Circle(10)

console.log(makeArray(rectangle));
console.log(makeArray(circle));


