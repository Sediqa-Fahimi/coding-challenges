//O(n log n) time | O(n) space , n is the length of str1 or str2.
function checkPermutationWithSort(str1,str2){
    if(str1.length !== str2.length) return false;

    return sort(str1) === sort(str2);
}

function sort(str){
    let array = str.split("");
    array.sort();
    return array.join("");
}

//O(N) time | O(1) space , N is the length of str1 or str2.
function checkPermutation(str1,str2){
    if(str1.length !== str2.length) return false; // check length

    //check if the strings have same letters with same counts;
    const charCounts = {}; // length of hash will always be 128 if ASCII.
    for(let char of str1){
        if(!charCounts[char]) charCounts[char] = 0;
        charCounts[char] += 1; 
    }
    for(let char of str2){
        if(!charCounts[char]) return false;
        charCounts[char] -= 1;
    }
    for(let key in charCounts){
        if(charCounts[key] !== 0) return false;
    }
    return true;
}

// console.log(checkPermutation('personal','sopernal')); // true
// console.log(checkPermutation('leave','eave')); // false
// console.log(checkPermutation('personel','lenosrep')); // true
// console.log(checkPermutation('academy','Academy')); // fasle

console.log(checkPermutationWithSort('personal','sopernal')); // true
console.log(checkPermutationWithSort('leave','eave')); // false
console.log(checkPermutationWithSort('personel','lenosrep')); // true
console.log(checkPermutationWithSort('academy','Academy')); // fasle