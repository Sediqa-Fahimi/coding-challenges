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

// O(logn) time | O(1) space 
// Binary search
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let left = 0;
    let right = nums.length - 1;
    
    if(nums[right] > nums[0]) return nums[0];
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] > nums[mid+1]) return nums[mid+1];
        if(nums[mid] < nums[mid-1]) return nums[mid];
        
        if(nums[mid] > nums[left]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
};