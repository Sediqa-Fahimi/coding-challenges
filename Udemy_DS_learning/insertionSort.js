// O(N^2) time | O(1) space
function insertionSort(arr){
   for(let i = 1; i < arr.length; i++){
    let currElement = arr[i];
    for(var j = i - 1; j >= 0 && currElement < arr[j]; j--){
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
   }
   return arr;
}
console.log(insertionSort([7,2,8,3,5,4,2,9]));
console.log(insertionSort([3,5,2,3,4,1,5,2,3,4,5]));
console.log(insertionSort([45,12,87,98,34,65,11]));