// O(N^2) time | O(1) space (worst case) | O(N) time (best case when arr is nearly sorted)
// Optimized to do less comparison in each pass. Also if arr is nearly sorted avoids unneccessary comparisons.

function bubbleSort(arr){
    let noSwaps; 
    const swap = (arr, idx1, idx2) => { // ES2015 version
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for(let i = arr.length; i > 0; i--){ // As i decreases, so does j.leads to less comparisons.
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break; // if no swaps after a full pass, break. avoids unneccessary comparisons 
        //when arr is nearly sorted.
    }
    return arr;
}

//O(N^2) time | O(1) space
// function bubbleSort(arr){
//     let sorted = false;
//     while(!sorted){
//         sorted = true;
//         for(let i = 0; i < arr.length - 1 ; i++){
//             if(arr[i] > arr[i+1]) {
//                 swap(arr, i , i+1);
//                 sorted = false;
//             }
//         }
//     }
//     return arr;
// }
// function swap(arr,idx1,idx2){
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }
// function swap(arr,idx1,idx2){
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

console.log(bubbleSort([7,2,8,3,5,4,2,9]));
console.log(bubbleSort([3,5,2,3,4,1,5,2,3,4,5]));
console.log(bubbleSort([45,12,87,98,34,65,11]));