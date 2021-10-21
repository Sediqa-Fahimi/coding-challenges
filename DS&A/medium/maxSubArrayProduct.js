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

// O(n) time | O(1) space
var maxProduct = function(nums){
    if(nums.length === 0) return 0;
    
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;
    
    for(let i = 1; i < nums.length; i++){
        let curr = nums[i];
        
        let tempMax = Math.max(curr, maxSoFar * curr, minSoFar * curr);
        minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr);
        
        maxSoFar = tempMax;
        
        result = Math.max(maxSoFar, result);
    }
    return result;
}