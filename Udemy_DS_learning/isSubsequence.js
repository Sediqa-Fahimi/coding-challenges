// O(N + M) time | O(1) space
function isSubsequence(str1, str2) {

  if(str2.length < str1.length) return false;
  
  let a = 0;
  let b = 0;
  while(a < str1.length){
      if(b >= str2.length) return false;
      if(str1[a] === str2[b]) a++;
        
      b++;
  }
  return true;
}