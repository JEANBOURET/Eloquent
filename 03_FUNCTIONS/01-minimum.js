// My solution
const min = (num1, num2) => num1>num2 ? num2 : num1;

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/*
Author's solution
function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/
