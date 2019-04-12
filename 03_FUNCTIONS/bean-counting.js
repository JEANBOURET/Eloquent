function countChar(str, char){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === char) count++;
    }
    return count;
}

function countBs(string){
    return countChar(string, "B");
}

/*
Author's solution
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}
*/


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
