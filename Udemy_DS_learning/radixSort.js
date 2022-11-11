//

function radixSort(arr){

}

/*********************************************************************************************************** */

// given an array of numbers, returns the number of digits in the largest numbers in the list.

function mostDigits(arr){
    let mostNum = 0;
    for(let num of arr){
        let digitNum = digitCount(num);
        if(digitNum > mostNum) mostNum = digitNum;
    }
    return mostNum;
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

console.log(mostDigits([5267,1,4532,654327]));
console.log(mostDigits([2,4,65]));
console.log(mostDigits([3]));
console.log(mostDigits([243,3333333,65435]));