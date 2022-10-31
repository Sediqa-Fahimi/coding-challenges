function binarySearch(array, target) {
	if(array.length === 0) return -1;
  const midIdx = Math.floor(array.length / 2);
	if(target < array[midIdx]){
		return binarySearch(array.slice(0,midIdx), target);
	}else if(target > array[midIdx]){
		const result = binarySearch(array.slice(midIdx+1), target);
		return result === -1 ? -1 : result + midIdx + 1;
	}else{
		return midIdx;
	}
}

// O(log n) time | O(1) space
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target) return mid;
        
        if(target > nums[mid]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
};