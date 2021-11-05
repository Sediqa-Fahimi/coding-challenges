
var rotate = function(nums, k) {
    let len = nums.length;
    const rotated = [];
    for(let i = 0; i < len; i++){
        let newIdx = (i + k) % len;
        rotated[newIdx] = nums[i];
    }
    return rotated;
};

console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-100,-33,0,4],2));
console.log(rotate([1],4));
console.log(rotate([1,2,3,4,5,6,7,8,9,10],15));