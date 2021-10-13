//O(n2) time | O(1) space
// var containsDuplicate = function(nums){
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] === nums[j]) return true;
//         }
//     }
//     return false;
// }

//O(nlogn) time | O(1) space
// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a-b);
//     for(let i = 0; i < nums.length - 1 ; i++){
//         if(nums[i] === nums[i+1]) return true;
//     }
//     return false;
// };

//O(n) time | O(n) space
var containsDuplicate = function(nums) {
    const numsHolder = {};
    for(const num of nums){
        if(num in numsHolder) return true;
        numsHolder[num] = true;
    }
    return false;
}