// O(n) time | O(n) space
// var sortedSquares = function(nums) {
//     const sortedSquares = [];
//     let left = 0;
//     let right = nums.length - 1;
    
//     while(left < right){
//         const num1 = nums[left];
//         const num2 = nums[right];
//         const num1Sq = num1 * num1;
//         const num2Sq = num2 * num2;
//         if(num1Sq > num2Sq){
//             sortedSquares.unshift(num1Sq);
//             left++;
//         }else if(num1Sq < num2Sq){
//             sortedSquares.unshift(num2Sq);
//             right--;
//         }else{
//             sortedSquares.unshift(num1Sq);
//             left++;
//         }
//     }
//     const smallestSq = Math.pow(nums[left],2);
//     sortedSquares.unshift(smallestSq);
//     return sortedSquares;
// };

// O(n) time | O(n) space
var sortedSquares = function(nums) {
    const sortedSquares = [];
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--){
        let square;
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            square = nums[left];
            left++;
        }else{
            square = nums[right];
            right--;
        }
        sortedSquares[i] = square * square;
    }
    
    return sortedSquares;
};