const info = {
    username: 'longyou',
    age: 20
}
info.username = 'ethanyu'



type Method = `GET` | `POST`
function request(url: string, method: Method) {

}

// type Request = {
//     url: string,
//     method: Method,
// }

// const options:Request = {
//     url: "http://localhost:8080",
//     method:`POST`
// }
// request(options.url,options.method)


// 字面量推理
const options = {
    url: "http://localhost:8080",
    method: `POST`
} as const

request(options.url, options.method as Method)

export { }