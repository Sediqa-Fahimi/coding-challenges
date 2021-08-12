// O(N) time | O(1) space
// The strings length defines what actions to check.
function oneAway(first, second){
    if(first.length === second.length){
        return checkEditReplace(first, second);
    } else if(first.length - 1 === second.length){
        return checkEditInsert(second, first);
    } else if(first.length + 1 === second.length){
        return checkEditInsert(first, second);
    }
    return false;
}

// check if inserting one letter in first can give us second. O(n) time | O(1) space
function checkEditInsert(first, second){
    let index1 = 0;
    let index2 = 0;
    while(index1 < first.length && index2 < second.length){
        if(first[index1] !== second[index2]){
            if(index1 != index2){ //catches replacement if any.
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}
// first and second lengths are equal. O(n) time | O(1) space
function checkEditReplace(first, second){
    let edits = 0;
    for(let i = 0; i < first.length; i++){
        if(first[i] !== second[i]) edits++;
        if(edits > 1) return false;
    }
    return true;
}

// Tests:
console.log(oneAway('pale','ple'), true);
console.log(oneAway('pale','bale'), true);
console.log(oneAway('pale','bake'), false);
console.log(oneAway('msk','matk'), false);