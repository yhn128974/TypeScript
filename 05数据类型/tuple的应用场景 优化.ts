// hook:useState
function useState<T>(state: T):[T,(newState: T) =>void]{
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }
    // 利用元组可以指定数组中的指定位置的数据类型
    const tupleResult: [T,(newState: T) =>void] = [currentState, changeState]
    return tupleResult;
}

const [counters, setCounter] = useState(10);
setCounter(1000)
console.log(counters);

const [title, setTitle] = useState("abc")
const [flage, setFlage] = useState(true)

// 声明一函数类型 "() => void"
type MyFunction = () => void
const foo: MyFunction = () => {
    
}

export {

}
