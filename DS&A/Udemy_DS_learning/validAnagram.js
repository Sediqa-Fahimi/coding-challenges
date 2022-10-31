// O(N) time | O(N) space
function validAnagram(str1,str2){
    if (str1.length !== str2.length) return false;
    const frequencyCounter1 = {}
    for (let i = 0; i < str1.length; i++){
        let char = str1[i];
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
    } 
 
    for (let i = 0; i < str2.length; i++){
        let char = str2[i];
        if(!frequencyCounter1[char]) return false;
        // if(frequencyCounter1[char] === 0 || !(frequencyCounter1[char])) return false;
        frequencyCounter1[char] -= 1;
    }
    return true;
}

//O(N^2) time | O(N) space
// function validAnagram(str1, str2){
//     if (str1.length !== str2.length) return false;
//     const str2Array = str2.split("");
//     for(let i = 0; i < str1.length; i++){
//         let idx = str2Array.indexOf(str1[i]);
//         if(idx === -1) return false;
//         str2Array.splice(idx,1);
//     }
//     return true;
// }


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) 
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true