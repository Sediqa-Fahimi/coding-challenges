// O(N) time | O(N) space
function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return false;
  if(callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}