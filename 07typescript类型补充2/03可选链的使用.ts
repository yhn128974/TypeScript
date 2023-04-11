type Person = {
    username: string,
    friend?: {
        name: string,
        age?: number,
        girlFirst?: {
            name: string,
        }
    }
}
const info: Person = {
    username: "why",
    friend: {
        name: 'longuou',
    }
}



console.log(info.username);
// 可选链调用 object?
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFirst?.name);

export { }