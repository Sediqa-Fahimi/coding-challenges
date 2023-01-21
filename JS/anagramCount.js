// Write a function to determine if the worda below are an anagram.
// string str = "keep, peek, race, care"

function anagrams(str){
  let count = 0;
  let words = str.split(", ");
  let i = 0;
  while(i < words.length - 1){
    if(isAnagram(words[i], words[i+1])) count++;
    i += 2;
  }
  return count;
}

function isAnagram(word1,word2){ // O(N) time | O(N) space
    if(word1.length !== word2.length) return false;
    const counter = {};
    for(let char of word1){
      if(!counter[char]) counter[char] = 1;
      else counter[char]++;
    }
    for(let char of word2){
      if(!counter[char]) return false;
      else counter[char]--;
    }
    return true;
}