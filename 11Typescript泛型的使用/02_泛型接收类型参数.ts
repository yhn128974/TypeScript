function foo<T, E, O>(arg1: T|O, arg2: E, arg: O) {

}

foo<number, string, boolean>(10, "longyou", true)
foo<number, string, boolean>(false, "longyou", true)
export {
}
