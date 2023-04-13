interface ILength{
    length: number
}

function getLength<T extends ILength>(arg:T) {
    return arg.length
}


console.log(getLength({ length: 1233 }));
console.log(getLength("asd"));
console.log(getLength(["asd", "asd"]));

