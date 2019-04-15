// My solution
function reverseArray(arr){
    let invArray = [];
    for(let i=arr.length-1; i>=0; i--){
        invArray.push(arr[i]);
    }
    return invArray;
}

function reverseArrayInPlace(arr){

    for(let i=0; i<Math.floor(arr.length/2); i++){
        let s = arr[i];
        let p = arr[arr.length-1-i];
        arr[i] = p;
        arr[arr.length-1-i] = s;
    }

    return arr;
}

/*
Author's solution

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
 */

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
