// Best & Average: O(NlogN) time , Worst(when arr is already sorted): O(N^2) time | O(logN) space
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
function pivot(arr, start = 0, end = arr.length - 1){ // changes the arr in place and return the pivot element index
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let pivotEle = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i <= end; i++){
        if(arr[i] < pivotEle){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

console.log(quickSort([100,4,3,8,400,2,6,10,-1,99,0,1,20]));