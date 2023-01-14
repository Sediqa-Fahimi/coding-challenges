// O(N) time | O(N) space
function longestSubstrLength(str){
    const strArr = str.split("");
    let maxLen = 0;
    let hash = {};
    let i = 0;
    while(i < strArr.length){
        let char = strArr[i];
        if(!hash[char]){
            hash[char] = i;
        }else{
            let len = Object.keys(hash).length;
            maxLen = Math.max(len, maxLen);
            i = hash[char];
            hash = {};
        }
        i++;
    }
    return Math.max(maxLen, Object.keys(hash).length);
}

//O(N^2) time | O(N^2) space
// function longestSubstrLength(str){
// 	let maxLen = 0;
// 	let counter = 0;
// 	let left = 0;
// 	let right = 0
// 	let hash = {}

// 	while(left < str.length){ 
//  		hash = {} 
//         counter = 0
// 		right = left + 1; 
// 		hash[str[left]] = true
//         counter++
// 		while(right < str.length){
//             if (!hash[str[right]]) { 
//                 hash[str[right]] = true
//                 counter ++
//             }else{ 
//                 break; 
//             }
//             right++;
//         }
//         if(counter > maxLen) maxLen = counter;
//         left++;
//     }
//     return maxLen;
// }

console.log(longestSubstrLength('pwwkew')); // 3
console.log(longestSubstrLength('bbbbb')); // 1
console.log(longestSubstrLength('abcabcbb')); // 3
console.log(longestSubstrLength('longestsubstring')); // 8
