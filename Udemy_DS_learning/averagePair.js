//O(N) time | O(1) space
function averagePair(arr,targetAvg){

  if(arr.length === 0) return false;
  
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
      let currentAvg = (arr[left] + arr[right]) / 2.0;
      if(currentAvg < targetAvg){
          left += 1;
      }else if (currentAvg === targetAvg){
          return true;
      }else if(currentAvg > targetAvg){
          right -= 1;
      }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false