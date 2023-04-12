class Animal {
    action() {
        console.log("animal action");

    }
}
class Dog extends Animal {
    action() {
        console.log("dog action");
    }
}

class Fish extends Animal {
    action() {
        console.log("fish action");
    }
}

// 多态是为了写出更加具有通用性的代码
function makeAction(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()
    })
}

makeAction([new Dog, new Fish])

