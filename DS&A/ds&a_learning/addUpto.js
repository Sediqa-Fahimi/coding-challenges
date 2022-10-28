// O(n) Time | O(1) Space
// function addUpTo(n){
//     let total = 0;
//     for(let i = 1; i <= n; i++){
//         total += i;
//     }
//     return total;
// }

// O(1) Time | O(1) Space
function addUpTo(n){
    return n * (n + 1) / 2;
}

// console.log(addUpTo(5));
// console.log(addUpTo(500));
// console.log(addUpTo(5000));
// console.log(addUpTo(50000));