//O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) { 
  for(let i = 0;i < array.length-1;i++){
		const firstNum = array[i];
		for(let j = i+1; j < array.length; j++){ 
			const secondNum = array[j];
			if(firstNum + secondNum === targetSum){
				return [firstNum, secondNum];
			}
		}
	}
	return [];
}

//O(N) Time | O(N) space
function twoNumberSum(array, targetSum) {
  const numbers = {};
	for(const num of array){
		const targetNum = targetSum - num;
		if(numbers[targetNum]){
			return [targetNum, num];
		}else{
			numbers[num] = true;
		}
	}
	return [];
}

//O(nlogn) Time | O(1) Space
function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	let left = 0;
	let right = array.length - 1;
	while(left < right){
		const currentSum = array[left] + array[right];
		if(currentSum === targetSum){
			return [array[left], array[right]];
		}else if(currentSum < targetSum){
			left++;
		}else if(currentSum > targetSum){
			right--;
		}
	}
	return [];
}

// To return indices 

// O(n2) time | O(1) space
// var twoSum = function(nums, target) {
    
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = i+1; j < nums.length ; j++){
//             if(nums[i] + nums[j] === target) return [i,j];
//         }
//     }
//     return [];
// };

// O(n) time | O(n) space
var twoSum = function(nums, target) {
    const numsStore = {};
    for(let i = 0; i < nums.length; i++){
        let otherNum = target - nums[i];
        if(otherNum in numsStore){
            return [numsStore[otherNum],i];
        }else{
            numsStore[nums[i]] = i;
        }
    }
    return [];
};

// The solution below only works if returning the two numbers not their indices.
// O(nlogn) time | O(1) space
// var twoSum = function(nums, target) {
//     nums.sort((a,b) => a-b);
    
//     let start = 0;
//     let end = nums.length - 1;
//     while(start < end){
//         let currentSum = nums[start] + nums[end];
//         if(currentSum === target){
//             return [nums[start],nums[end]];
//         }else if(currentSum > target){
//             end--;
//         }else if(currentSum < target){
//             start++;
//         }
//     }
//     return [];
// };