//O(N*M) time | O(N*M) space - N is arr length, M is length of each str in arr.
function capitalizeFirst (arr, idx = 0) {
  // add whatever parameters you deem necessary - good luck!
  if(idx === arr.length) return arr;
  arr[idx] = arr[idx][0].toUpperCase() + arr[idx].slice(1);
  
  return capitalizeFirst(arr, idx + 1);
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']