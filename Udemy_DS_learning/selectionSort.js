// O(N^2) time | O(1) space
function selectionSort(arr){
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i) swap(arr, i, min); // if i is the minimum element, dont swap, skip.
    }
    return arr;
}

console.log(selectionSort([7,2,8,3,5,4,2,9]));
console.log(selectionSort([3,5,2,3,4,1,5,2,3,4,5]));
console.log(selectionSort([45,12,87,98,34,65,11]));