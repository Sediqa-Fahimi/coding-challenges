// O(N) time || O(N) space
function same(arr1, arr2){
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1){
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }
    for (let val of arr2){
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }
    for(let key in frequencyCounter1){
        if(!frequencyCounter2[key ** 2]) return false;
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}

//O(N^2) time | O(N) space
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length) return false;

//     for(let val of arr1){
//         let correspondingIdx = arr2.indexOf(val ** 2);
//         if(correspondingIdx === -1) return false;
//         arr2.splice(correspondingIdx,1);
//     }
//     return true;
// }

// console.log(same([1,2,3],[9,4,1])) // true
// console.log(same([1,2],[9,4,1])) // false
// console.log(same([1,5,1],[25,1,25])) // false
