//My Solution
//converts an array to a list
function arrayToList(arr){
    let rest = null;
    for(let i=arr.length-1; i>=0; i--){
        rest = {
            value: arr[i],
            rest: rest
        };
    }
    return rest;
}

//converts a list to an array
let arr = [];
function listToArray(list){
    arr.push(list.value);
    if(list.rest !== null){
        return listToArray(list.rest);
    }
    return arr;
}

//adds an element to the front of the input list
function prepend(el, list){
    return {
        value: el,
        rest: list
    };
}

//returns the element at the given position of the list
function nth(list, index){
    let counter = 0;
    let newList = list;
    let element = undefined;
    while(counter <= index){
        element = newList ? newList.value : undefined;
        newList = newList && newList.rest;
        counter++
    }
    return element;
}

/*
Author's Solution

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}
 */

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));
