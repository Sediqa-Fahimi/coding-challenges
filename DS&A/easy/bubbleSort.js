// Worst case: O(N2) Time | O(1) space 
// Best case: O(N) Time | O(1) space
function bubbleSort(array){
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                swap(i, i+1, array);
                sorted = false;
            }
        }
    }
    return array;
}

function swap(i, j , array){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(bubbleSort([5,3,7,1,0,2]));
