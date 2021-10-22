//O(n) time | O(1) space
// var findMin = function(nums) {
//     let min = nums[0];
//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] < min) min = nums[i];
//     }
//     return min;
// };

//O(n) time | O(1) space
// var findMin = function(nums) {
//     for(let i = 0; i < nums.length - 1; i++){
//         if(nums[i] > nums[i+1]) return nums[i+1];
//     }
//     return nums[0];
// };