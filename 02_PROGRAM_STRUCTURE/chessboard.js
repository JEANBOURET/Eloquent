// My solution
let size = 10;
let str = '';
for(let i=1; i<=size; i++){
    for(let j=1; j<=size; j++){
        if(i%2 === 0){
            str += (j%2 !== 0) ? '#' : ' ';
        }else{
            str += (j%2 === 0) ? '#' : ' ';
        }
    }
    str+='\n';
}
console.log(str);

// Author's solution
// let size = 8;
// let board = "";
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }
// console.log(board);
