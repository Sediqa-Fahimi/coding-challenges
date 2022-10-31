//O(N) time | O(1)space
function sumZero(sortedArr){
    let left = 0;
    let right = sortedArr.length - 1;
    while(left < right){
        let currentSum = sortedArr[left] + sortedArr[right];
        if(currentSum === 0) return [left,right];
        if(currentSum > 0) right -= 1;
        if(currentSum < 0) left += 1;
    }
}

//O(N^2) time || O(1) space
// function sumZero(sortedArr){
//     for (let i = 0; i < sortedArr.length; i++){
//         for (let j = i+1; j < sortedArr.length ; j++){
//             if (sortedArr[i] + sortedArr[j] === 0){
//                 return [i,j];
//             }
//         }
//     }
// }

console.log(sumZero([-3,-2,0,1,3])) // [0,4]
console.log(sumZero([1,4,5,7,8,9])) // undefined
console.log(sumZero([-5,-4,-1,1,2,3])) // [2,3]