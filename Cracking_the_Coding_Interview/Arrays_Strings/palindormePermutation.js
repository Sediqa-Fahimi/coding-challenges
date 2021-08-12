// O(N) time | O(1) space
function palindromePermutation(str){
    const letters = {};
    for(let char of str){ // n
        if(char === ' ') continue;
        if(char !== char.toLowerCase()) char = char.toLowerCase();
        if(!letters[char]) letters[char] = 0;
        letters[char] += 1;
    }
    let counter = 0;
    for(let key in letters){ //O(1) < 128 ASCII chars, if case insensitive.
        if(letters[key] % 2 !== 0) counter++;
        if(counter > 1) return false;
    }
    return true;
}

// Tests:
console.log(palindromePermutation('Tact Coa'), true);
console.log(palindromePermutation('Abddba'), true);
console.log(palindromePermutation('Atco Cta'), true);
console.log(palindromePermutation('tt taacc ooo'), false);