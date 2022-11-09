//O(N*M) time | O(1) space , N is the length of the longer str, M is the length of the shorter str.
function stringSearch(str1, str2){
    // assume str1 is longer than str2.
    let count = 0;
    for(let i = 0; i < str1.length;i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i+j] !== str2[j]) break;
            if(j === str2.length - 1) count++;
        }
    }
    return count;
}
//return the count of str2 appearance in str1.

console.log(stringSearch('hahaomgwowomg', 'omg')); // 2
console.log(stringSearch('hahaomgwoomg', 'omg')); // 2
console.log(stringSearch('hah', 'wow'));           // 0
console.log(stringSearch('justastring', 'ring'));  // 1
console.log(stringSearch('justastring notaring', 'ring'));  // 2