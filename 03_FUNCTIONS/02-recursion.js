// My solution
function isEven(number){
    number = number < 0 ? number*(-1) : number;
    if(number === 0){
        return true;
    }else if(number === 1){
        return false;
    }else{
        number = number - 2;
        return isEven(number);
    }
}

/*Author's solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}*/

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
