

function printMessage(message?: string) {
    // if (message) {
    //     console.log(message.length);
    // }

    // 非空类型断言
    console.log(message!.length);
}


printMessage()
printMessage("helo")