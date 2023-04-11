
//
function sums(...nums: number[]) {
    // let total = 0;
    // nums.forEach(item => total+=item)
    // return total
    return nums.reduce((acc, item) => acc += item)
}

console.log(sums(20, 30, 50));
console.log(sums(20, 30, 50, 30));



