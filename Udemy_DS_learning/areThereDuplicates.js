//O(N) time | O(N) space
// function areThereDuplicates(...args) {

//   const frequencyCounter = {};
//   for(let arg of args){
//       if(frequencyCounter[arg]){
//           return true;
//       }else{
//           frequencyCounter[arg] = true;
//       }
//   }
//   return false;
// }

// O(NlogN) time | O(1) space
function areThereDuplicates(...args){
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]) return true;
        start++;
        next++;
    }
    return false;
}
// One Liner Solution
function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true