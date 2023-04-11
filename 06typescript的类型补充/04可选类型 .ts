
// 设置可选类型 z?:number
function printPoints(points: { x: number, y: number,z?:number}) {
    console.log(points.x);
    console.log(points.y);
    console.log(points.z);
}

printPoints({ x: 0, y: 0 ,z: 0 });
printPoints({ x: 0, y: 0 });

export {}