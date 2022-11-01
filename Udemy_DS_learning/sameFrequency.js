//O(N) time | O(N) space
function sameFrequency(num1,num2){

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  const counts = {};
  for(let num of strNum1){
      counts[num] = ++counts[num] || 1;
  }

  for(let num of strNum2){
      if(!counts[num]){
          return false;
      }else{
          counts[num] -= 1;
      }
  }
  return true;
  
}

// function sameFrequency(num1,num2){

//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   const countNum1 = {};
//   const countNum2 = {};

//   for(let num of strNum1){
//       countNum1[num] = (countNum1[num] || 0) + 1;
//   }
//   for(let num of strNum2){
//       countNum2[num] = (countNum2[num] || 0) + 1;
//   }

//   for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
  
// }
