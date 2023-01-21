function leastUniqueElements(arr, k){
    let hash = {};
    for(let num of arr){
        if(!hash[num]) hash[num] = 1;
        else hash[num]++;
    }
    for(key in hash){
        if(k === 0) break;
        if(hash[key] === 1 && k > 0){
            delete hash[key];
            k--;
        }
    }
    if(k > 0){
        for(key in hash){
            hash[key]--;
            k--;
            if(hash[key] === 0){
                delete hash[key];
            }
            if(k === 0) break;
        } 
    }

    return Object.keys(hash).length;
}

console.log(leastUniqueElements([5,5,4], 1)); // 1
console.log(leastUniqueElements([4,3,1,1,3,3,2], 3)); // 2
console.log(leastUniqueElements([4,3,1,1,3,3,2], 0)); // 4
console.log(leastUniqueElements([4,3,1,1,3,3,2], 7)); // 0