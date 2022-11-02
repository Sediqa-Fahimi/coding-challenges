//O(N) time | O(1) space
function minSubArrayLen(arr, num){
    let maxNum = 0;
    let maxIdx = 0;
    let totalSum = 0;
    for(let i = 0; i < arr.length ; i++){
        let val = arr[i];
        if(val >= num) return 1;
        totalSum += val;
        if(val > maxNum){
            maxNum = val;
            maxIdx = i;
        }
    }
    if (totalSum < num) return 0;
    if (totalSum === num) return arr.length;
    let currentSum = maxNum; 
    let count = 1;
    let left = maxIdx;
    let right = maxIdx;
    while(currentSum < num){
        if(arr[left - 1] > arr[right + 1]){
            currentSum += arr[left - 1];
            left--;
        }else{
            currentSum += arr[right + 1];
            right++;
        }
        count++;
    }
    return count;
}