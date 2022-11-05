//
// function flatten(arrays){
//   // add whatever parameters you deem necessary - good luck!
//   let flattened = [];
//   for(let ele of arrays){
//       if(Array.isArray(ele)){
//           flattened = flattened.concat(flatten(ele));
//       }else{
//           flattened.push(ele);
//       }
//   }
//   return flattened;
// }
// O(N) time | O(N) space // where N is the level of deepness in Arrays.
function flatten(arrays){
  // add whatever parameters you deem necessary - good luck!
  const flattened = [];
  
  function helper(arr){
      for(let ele of arr){
          if(Array.isArray(ele)){
              helper(ele);
          }else{
              flattened.push(ele);
          }
      }
  }
  
  helper(arrays);
  return flattened;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3