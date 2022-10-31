//O(N) time | O(1) space
function countUniqueValues(sortedArr){
    if(sortedArr.length === 0) return 0;

    let start = 0;
    let end = 1;
    let count = 0;
    while(end < sortedArr.length){
        while(sortedArr[start] === sortedArr[end]){
            start += 1;
            end += 1;
        }
        count += 1;
        start += 1;
        end += 1;
    }
    return count + 1;
}

//O(N) time || O(1) space 
// function countUniqueValues(sortedArr){ // This solution changes the actual array. 
//                                         // Thats why I prefer the above solution with the counter var.
//     if(sortedArr.length === 0) return 0;
//     let i = 0;
//     for (let j = 1; j < sortedArr.length; j++){
//         if(sortedArr[i] !== sortedArr[j]){
//             i++;
//             sortedArr[i] = sortedArr[j];
//         }
//     }
//     return i + 1;
// }

//O(N) time | O(N) space
// function countUniqueValues(sortedArr){
//     let counts = {};
//     sortedArr.forEach(el => {
//         counts[el] ? counts[el] += 1 : counts[el] = 1;
//     });
//     return Object.keys(counts).length;
// }

console.log(countUniqueValues([0,1,1,2,3,3,3,4,5,6,7])); // 8
console.log(countUniqueValues([-2,-2,0,0,0,1])); // 3
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1,2,3,4,5])); // 5