// hook:useState
function useState(state: any) {

    let currentState = state

    const changeState = (newState: any) => {
        currentState = newState
    }

    const tuple: [any,(newState: any) =>void] = [currentState, changeState]

    return tuple;
}
const [counters, setCounter] = useState(10);
setCounter(1000)
console.log(counters);

 const [title,setTitle]=useState("abc")
