//O(N) time | O(N) space
function sameFrequency(num1,num2){

  let num1Str = num1.toString();
  const frequencyCounter = {};
  for(let num of num1Str){
      frequencyCounter[num] = ++frequencyCounter[num] || 1;
  }
  let num2Str = num2.toString();
  for(let num of num2Str){
      if(!frequencyCounter[num]){
          return false;
      }else{
          frequencyCounter[num] -= 1;
      }
  }
  return true;
  
}