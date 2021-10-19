//- find every subarray
//  - find the current subarray s sum
//  - if current sum is bigger than maxsum:
//     - replace maxsum
//- return maxsum
// find the total sum recursively

//O(n3) time | O(n2) space
// var maxSubArray = function(nums) {
//     let maxSum = -Infinity;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i; j < nums.length; j++){
//             let currentSubArray = nums.slice(i,j+1);
//             let currentSum = arraySum(currentSubArray);
//             if(currentSum > maxSum) maxSum = currentSum;
//         }
//     }
//     return maxSum;
// };
// //O(n) time | O(n) space
// function arraySum(array){
//     if(array.length === 1) return array[0];
//     return array[0] + arraySum(array.slice(1));
// }
// //O(n) time | O(1) space
// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }


// O(n2) time | O(1) space
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            if(sum > maxSum) maxSum = sum;
        }
    }
    return maxSum;
};

//O(n) time | O(1) space
// Dynamic programming - Kadane's Algorithm
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    
    return maxSum;
};