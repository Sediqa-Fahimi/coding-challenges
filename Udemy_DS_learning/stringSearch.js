//O(N) time | O(1) space , N is the length of the longer str.
function stringSearch(str1, str2){
    let matches = 0;
    let idx1 = 0;
    let idx2 = 0;
    while(idx1 <= str1.length){
        if(idx2 === str2.length){
            idx2 = 0;
            matches += 1;
        }
        if(idx1 === str1.length) break;
        if(str1[idx1] === str2[idx2]) idx2 += 1;
        else idx2 = 0;
    
        idx1 += 1;
    }
    return matches;
}
//return the count of str2 appearance in str1.

console.log(stringSearch('hahaomgwowomg', 'omg')); // 2
console.log(stringSearch('hah', 'wow'));           // 0
console.log(stringSearch('justastring', 'ring'));  // 1