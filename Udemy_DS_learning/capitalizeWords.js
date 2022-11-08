// O(N) time | O(N*M) space, N is arr.length , M is str.length 
function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return [];
  let capitalized = [];
  capitalized.push(arr[0].toUpperCase());
  return capitalized.concat(capitalizeWords(arr.slice(1)));
  
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']