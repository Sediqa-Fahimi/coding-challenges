// O(n2) time | O(1) space
// var productExceptSelf = function(nums) {
//     const answer = [];
//     let product;
//     for(let i = 0 ; i < nums.length; i++){
//         product = 1;
//         for(let j = 0; j < nums.length; j++){
//             if(j !== i) product *= nums[j];
//         }
//         answer[i] = product;
//     }
//     return answer;
// };

//O(n) time | O(n) space
// var productExceptSelf = function(nums){
//     const answer = [];
//     const left = [];
//     const right = [];
    
//     left[0] = 1;
//     for(let i = 1; i < nums.length; i++){
//         left[i] = left[i-1] * nums[i-1];
//     }
    
//     right[nums.length - 1] = 1;
//     for(let i = nums.length - 2 ; i >= 0 ; i--){
//         right[i] = right[i+1] * nums[i+1];
//     }
    
//     for(let i = 0; i < nums.length; i++){
//         answer[i] = left[i] * right[i];
//     }
    
//     return answer;
// }

// O(n) time | O(1) space
var productExceptSelf = function(nums){
    const answer = [];
    
    answer[0] = 1;
    for(let i = 1; i < nums.length; i++){
        answer[i] = answer[i-1] * nums[i-1];
    }
    
    let right = 1;
    for(let i = nums.length-1; i >= 0; i--){
        answer[i] = answer[i] * right;
        right = right * nums[i];
    }
    return answer;
}