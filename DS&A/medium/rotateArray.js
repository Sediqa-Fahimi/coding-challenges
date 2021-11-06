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

//O(n) time | O(1) space
var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;

    let start = 0;
    let count = 0;
    
    while(count < len){
        let current = start;
        let prev = nums[start];
        while(true){
            let nextIdx = (current + k) % len;
            let temp = nums[nextIdx];
            nums[nextIdx] = prev;
            prev = temp;
            current = nextIdx;
            count++;
            if(current === start) break;
        }
        start++;
    }
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-100,-33,0,4],2));
console.log(rotate([1],4));
console.log(rotate([1,2,3,4,5,6,7,8,9,10],15));