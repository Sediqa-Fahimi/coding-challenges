//*******  SLIDING WINDOW PATTERN  ****/
// O(N) time | O(1) space
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num]+ arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

// O(N^2) time | O(1) space
// function maxSubarraySum(arr, len){
//     if(arr.length < len) return null;

//     let maxSum = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         let currentSum = 0;

//         let j = i;
//         let n = 0;
//         while(n < len){
//             currentSum += arr[j];
//             n += 1;
//             j += 1;
//         }

//         if (currentSum > maxSum) maxSum = currentSum;
//     }
//     return maxSum;
// }

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySum([4,2,1,6],1)); // 6
console.log(maxSubarraySum([4,2,1,6,2],4)); // 13
console.log(maxSubarraySum([],4)); // null