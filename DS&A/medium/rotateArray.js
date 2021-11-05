// O(n) time | O(n) space
// var rotate = function(nums, k) {
//     let len = nums.length;
//     let rotated = [];
//     for(let i = 0; i < len; i++){
//         let newIdx = (i + k) % len;
//         rotated[newIdx] = nums[i];
//     }
//     for(let i = 0; i < len; i++){
//         nums[i] = rotated[i];
//     }
//     return nums;
// };

var rotate = function(nums, k) {
    let len = nums.length;
    let temp;
    let value = nums[0];
    let newIdx = 0;
    let count = 0;
    while(count < len){
        newIdx = (newIdx + k) % len;
        temp = nums[newIdx];
        nums[newIdx] = value;
        value = temp;
        count++;
    }
    return nums;
};



console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-100,-33,0,4],2));
console.log(rotate([1],4));
console.log(rotate([1,2,3,4,5,6,7,8,9,10],15));