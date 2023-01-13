function minStart(arr){
    let first = true;
    let runningSum = 0;
    for(let i = arr.length-1; i >= 0; i--){
        let value = arr[i];
        if(value <= 0 && first){
            runningSum = Math.abs(value) + 1;
            first = false;
            continue;
        }
        if(runningSum > 0){
            runningSum = runningSum - value;
            if(runningSum <= 0) runningSum = 1;
        }
    }
    return runningSum;
}

console.log(minStart([-5,4,-2,3,1,-1,-6,-1,0,5])); // 8
console.log(minStart([-5,4,-2,3,1])); // 6
console.log(minStart([-2,-3,0,7,-8,1,5])); // 7
