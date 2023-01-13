// O(Logn * Logm) time | O(1) space - n: length of matrix , m: length of subArray
function findTarget(matrix, target){
    let left = 0;
    let right = matrix.length - 1;
    while(left <= right){
        let midIdx = Math.floor(left + right / 2);
        let subArr = matrix[midIdx];
        
        if(target > subArr[0] && target < subArr[subArr.length-1]){
            return binarySearch(subArray, target);
        }else if(target < subArr[0]){
            right = midIdx - 1;
        }else if(target > subArr[subArr.length-1]){
            left = midIdx + 1;
        }
    }
    return false;
}
function binarySearch(arr, target){
	let left = 0;
	let right = arr.length - 1;
	while(left <= right){
        let midIdx = Math.floor(left + right / 2);
        let value = arr[midIdx];
        
        if(value === target){
            return true;
        }else if(target < value){
            right = midIdx - 1;
        }else if(target > value){
            left = midIdx + 1;
        }
    }
    return false;
}

