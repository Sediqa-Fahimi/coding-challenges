//O(logN) time || O(1) space
function indexEqualsValueSearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right)/2);
    let midEl = arr[mid];
    if(midEl < mid){
      left = mid + 1;
    } else if (midEl === mid && (mid === 0 || (arr[mid-1] < mid-1))){
        return mid;
    } else {
        right = mid - 1;
    }
  }
  return -1;
}
console.log(indexEqualsValueSearch([0,1,2])); // 0
console.log(indexEqualsValueSearch([-8,0,2,3,4,19,22])); // 2
console.log(indexEqualsValueSearch([2,4,7,8,9,10])); // -1