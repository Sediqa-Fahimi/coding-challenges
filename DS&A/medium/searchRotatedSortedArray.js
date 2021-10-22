function MinItemIndex(nums){
    let left = 0;
    let right = nums.length - 1;
    let rotationIndex = 0;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] > nums[mid+1]){
            rotationIndex = mid+1;
            break;
        }
        if(nums[mid] < nums[mid-1]){
            rotationIndex = mid;
            break;
        }
        if(nums[mid] > nums[left]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return rotationIndex;
}

console.log(MinItemIndex([3,4,5,6,7,8,9,0,1,2]));