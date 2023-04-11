
function foo(): never {
    // 死循环,不会有返回值
    while (true) {
    }
}

function bar(): never {
    throw new Error()
}

// 封装一个核心函数
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log("string's way");
            break;
        case 'number':
            console.log(`number's way`);
            break;
        case 'boolean':
            console.log(`boolean's way`);
            break;
        default:
            const check: never = message
    }
}

handleMessage(`hello`)
handleMessage(124)
handleMessage(true)
