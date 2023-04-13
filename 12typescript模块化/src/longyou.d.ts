
// 声明模块
declare module 'lodash' {
    export function join(arr: any[]): void
}

// 声明类，函数，字面量
declare let username: string
declare let password: string

declare function whyFoo(): void

declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

declare namespace $ {
    export function ajax(setting: any): any
}



