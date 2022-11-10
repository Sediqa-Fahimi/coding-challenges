// O(NlogN) time | O(N) space, N is the length of the arr.
// log N decomposition * N comaprisons in each decomposition.
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let midIdx = Math.floor(arr.length / 2);
    let sortedLeft = mergeSort(arr.slice(0, midIdx));
    let sortedRight = mergeSort(arr.slice(midIdx));
    return mergeHelper(sortedLeft, sortedRight);
}

function mergeHelper(left,right){ // O(N) time | O(N) space 
    const sorted = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sorted.push(left[i]);
            i++;
        }else{
            sorted.push(right[j]);
            j++;
        }
    }
    while(i < left.length){
        sorted.push(left[i]);
        i++;
    }
    while(j < right.length){
        sorted.push(right[j]);
        j++;
    }
    return sorted;
}

console.log(mergeSort([7,2,8,3,5,4,2,9]));
console.log(mergeSort([3,5,2,3,4,1,5,2,3,4,5]));
console.log(mergeSort([45,12,87,98,34,65,11]));
