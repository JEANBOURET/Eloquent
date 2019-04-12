// My Solution
function range(start, end, step){
    let arr = [];
    if(step && step < 0){
        for(let i=start; i>=end; i+=(step)) arr.push(i);
    }else{
        for(let i=start; i<=end; i++) arr.push(i);
    }
    return arr;
}

function sum(arr){
    let res = 0;
    for(let i=0; i<arr.length; i++) res += arr[i];
    return res;
}

/*
Author's solution
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}
*/

// console.log(20+(-10));
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
