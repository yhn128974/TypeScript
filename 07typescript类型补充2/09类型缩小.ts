// type of 类型缩小
type IDType = number | string
function printType(id: IDType) {
    // 类型保护
    if (typeof id === 'string') {
        console.log(id.toLowerCase);
    } else {
        console.log(id);
    }
}

// 平等的类型缩小（=== == ！== ！= （switch））
type Direction = `left` | `right` | `top` | `bottom`
function printDirection(direction: Direction) {

    // if (direction===`left`) {
    //  console.log(direction);

    // } else if (direction === `right`) {

    // }

    // switch (direction) {
    //     case `left`:
    //         console.log(direction)
    //         break;
    //     case `right`:

    // }
}


// instanceof
function printTime(time: string | Date) {
    // 判断对象类型
    if (time instanceof Date) {
        console.log(time.toUTCString);

    } else {
        console.log(time);
    }
}

class Student {
    studying() {

    }
}
class Teacher {
    teaching() {

    }
}

function worker(p: Student | Teacher) {
    if (p instanceof Student) {
        p.studying();
    } else {
        p.teaching();
    }
}

// in
type Fish = {
    swimming: () => void;
}


type Dog = {
    running: () => void
}

function remove(animal: Dog | Fish) {
    if ('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
}

const fish: Fish = {
    swimming() {
        console.log('swimming');

    }
}

export { }

