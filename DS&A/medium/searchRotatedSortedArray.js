//O(logn) time | O(1) space
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

// console.log(MinItemIndex([3,1,2]));

//O(log n) time | O(1) space
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rotationIndex = 0;
    
    if(nums.length > 1){
        
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
    }
    left = 0;
    right = nums.length - 1;

    if(rotationIndex !== 0){
        if(target === nums[0]) return 0;
        if(target > nums[0]) right = rotationIndex - 1;
        if(target < nums[0]) left = rotationIndex;
    }
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target) return mid;
        
        if(target > nums[mid]) left = mid + 1;
        if(target < nums[mid]) right = mid - 1;
    }
    return -1;
};

console.log(search([3,1,2],3)); // 0
console.log(search([3,1,2],1)); // 1
console.log(search([3,1,2],2)); // 2
console.log(search([3,1,2],9)); // -1
console.log(search([6,7,8,9,0,2],2)); // 5
console.log(search([1,2],2)); // 1