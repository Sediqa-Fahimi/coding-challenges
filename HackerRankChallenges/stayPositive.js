//O(N) time | O(1) space
// function minStart(arr){
//     let first = true;
//     let runningSum = 0;

//     for(let i = arr.length-1; i >= 0; i--){
//         let value = arr[i];
//         if(value <= 0 && first){ // finding the first negative num starting from the end of array.
//             runningSum = Math.abs(value) + 1;
//             first = false;
//             continue;
//         }
//         if(runningSum > 0){ // subtracting the running sum from values, after finding the first negative number.
//             runningSum = runningSum - value;
//             if(runningSum <= 0) runningSum = 1;
//         }
//     }

//     return runningSum;
// }

// O(N) time | O(1) space
function minStart(arr){
    let ans = 0;
    let currSum = 0;

    for(let num of arr){
        currSum += num;
        if(currSum < 1){
            ans += 1 - currSum; // when currSum becomes negative, lets calculate how much more we need to make the running sum 1 in addition to prev negative running sum(ans).
            currSum = 1;
        }
    }

    if(ans === 0) ans = 1; // ans remains zero if all nums are positive.

    return ans;
}

console.log(minStart([-5,4,-2,3,1,-1,-6,-1,0,5])); // 8
console.log(minStart([-5,4,-2,3,1])); // 6
console.log(minStart([-2,-3,0,7,-8,-11,5])); // 18
