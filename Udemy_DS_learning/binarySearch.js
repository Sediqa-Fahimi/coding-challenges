// O(logN) time | O(1) space
function binarySearch(arr, value){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
      let midIdx = Math.floor((left + right) / 2);
      let item = arr[midIdx];
      if(item === value){
          return midIdx;
      }else if(item < value){
          left = midIdx + 1;
      }else{
          right = midIdx - 1;
      }
  }
  return -1;
}