interface ISwim{
    swmming:()=>void;
}

interface IFly{
    flying: () => void
}

interface Action extends ISwim,IFly{

}

const action: Action={
    swmming() {
        
    },
    flying() {
        
    }
}