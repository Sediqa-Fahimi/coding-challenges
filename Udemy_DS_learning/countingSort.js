// O(n + k) time | O(k) space , n : arr.length, k: maximum number(counter length)
function countingSort(arr, max){
    const sorted = [];
    const counter = Array.from({length: max + 1}, () => 0);
    for(let num of arr){
        counter[num] += 1;
    }
    for(let i = 0; i < counter.length; i++){
        while(counter[i] > 0){
            sorted.push(i);
            counter[i] -= 1;
        }
    }
    return sorted;
}

console.log(countingSort([5,8,6,4,7,0,1,3,9,10],10)); 