
//using no data structure
// O(N2) Time | O(1) Space
function isUniqueNoDS(str){
    if(str.length > 128) return false; //128 chars in ASCII

    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if(str[i] === str[j]) return false;
        }
    }

    return true;
}

//Optimized 
// O(1) Time | O(1) space
function isUnique(str){
    if(str.length > 128) return false;

    const charCounts = {};
    for(let char of str){
        if(charCounts[char]) return false;
        charCounts[char] = 1;
    }
    return true;
}
//Tests:
console.log(isUnique('personal')) //=> true
console.log(isUnique('personel')) //=> false
console.log(isUnique('AaBb123%#@')) //=> true
console.log(isUnique('leave')) //=> false

console.log(isUniqueNoDS('personal')) //=> true
console.log(isUniqueNoDS('personel')) //=> false
console.log(isUniqueNoDS('AaBb123%#@')) //=> true
console.log(isUniqueNoDS('leave')) //=> false