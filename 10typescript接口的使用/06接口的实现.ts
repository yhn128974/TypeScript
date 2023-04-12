interface ISwim {
    swimming: () => void
}

interface IEat {
    eatings: () => void
}

// 类实现接口
class Animal {

}

// 继承：只能实现单继承
// 实现 ：实现接口 ，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
    swimming() {
        console.log("Fish Swimming");
    }
    eatings() {
        console.log("Fish eating");
    }
}

// 编写一些公共的API():面向接口编程
function swimAction(swimable: Fish) {
    swimable.swimming()
}

// 所有实现了接口的类对应的对象都是可以传入的
swimAction(new Fish())

swimAction({
    swimming() {
        console.log("Fish Swimming1");
    },
    eatings() {
        console.log("Fish eating1");
    }
})




