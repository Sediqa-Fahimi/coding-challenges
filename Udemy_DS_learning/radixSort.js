// O(nk) time (Best, Average, Worst)| O(n+k) space, n - length of nums, k - number of digits(average) 
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let num of nums){
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        nums = [].concat(...digitBuckets); // flattens the 2d digitBuckets
    }
    return nums;
}
// function radixSort(nums){
//     const createBuckets = () => {
//         let arr = new Array(10);
//         for(let i = 0; i < arr.length; i++){
//             arr[i] = new Array();
//         }
//         return arr;
//     }
//     let largerNumDigit = mostDigits(nums);
//     for(let k = 0; k < largerNumDigit; k++){
//         let buckets = createBuckets();
//         for(let num of nums){
//             buckets[getDigit(num, k)].push(num);
//         }
//         let i = 0;
//         for(let bucket of buckets){
//             while(bucket.length !== 0){
//                 nums[i] = bucket.shift();
//                 i++;
//             }
//         }
//     }
//     return nums;
// }

/*********************************************************************************************************** */

// given an array of numbers, returns the number of digits in the largest numbers in the list.

function mostDigits(nums){
    let maxDigits = 0;
    for(let num of nums){
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

/*********************************************************************************************************** */

// O(1) time / space      - returns the number of digits in num

function digitCount(num){       
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// O(N) time | O(N) space
// function digitCount(num){ 
//     return num.toString().length
// }

/*********************************************************************************************************** */

// O(1) time / space      - return the digit in num at that position. ex: 45 (5 is at pos 0, 4 is at pos 1)

function getDigit(num, pos){    
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}
//  O(N) time | O(N) space
// function getDigit(num, pos){ 
//     let numStr = num.toString();
//     if(pos > numStr.length - 1) return 0;
//     let j = 0;
//     for(let i = numStr.length - 1; i >= 0; i--){
//         if(j === pos) return parseInt(numStr[i]);
//         j++;
//     }
// }

console.log(radixSort([5267,1,4532,654327,45]));
console.log(radixSort([24323,4,65]));
console.log(radixSort([3,1,6,3]));
console.log(radixSort([243,3333333,74,65435]));