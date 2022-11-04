
function findLongestSubstring(str){

  if(str.length === 0) return 0;
  let strArray = str.split('');
  let maxLength = 0;
  let i = 0;
  let chars = {};
  while(i < strArray.length){
      if(!chars[strArray[i]]){
          chars[strArray[i]] = i;
      }else {
        let len = Object.keys(chars).length;
          maxLength = Math.max(maxLength,len);
          i = chars[strArray[i]];
          chars = {};
      }
      i++;
  }
  return Math.max(maxLength,Object.keys(chars).length);
}

console.log(findLongestSubstring('longestsubstring')); // 8