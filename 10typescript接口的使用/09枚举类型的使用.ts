// enum 枚举类型
enum Direction {
    // LEFT = 1
    // RIGHT = 2,
    // CENTER = 3,
    // TOP = 4,
    // BOTTOM = 5,
    LEFT,
    RIGHT,
    CENTER,
    TOP,
    BOTTOM,
}

function turnDirection(direction: Direction) {
    console.log(direction);
    switch (direction) {
        case Direction.LEFT:
            console.log('LEFT');
            break;
        case Direction.RIGHT:
            console.log('RIGHT');
            break;
        case Direction.TOP:
            console.log('TOP');
            break;
        case Direction.BOTTOM:
            console.log('BOTTOM');
            break;
        default:
            break;
    }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)

export {

}