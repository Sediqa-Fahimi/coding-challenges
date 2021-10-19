// O(n2) time | O(1) space
var maxProduct = function(nums) {
    let maxPro = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = i; j < nums.length; j++){
            product *= nums[j];
            if(product > maxPro) maxPro = product;
        }
    }
    return maxPro;
};