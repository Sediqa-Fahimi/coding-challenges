//
function oneAway(str1, str2){
    if(str1 === str2) return true; // zero edits.

    const lenDif = str1.length - str2.length;
    if(Math.abs(lenDif) > 1) return false; // check only if the lengths are equal or one apart.

    //find longer str.
    let longStr = str1;
    let shortStr = str2;
    if(lenDif < 1) {
        longStr = str2;
        shortStr = str1;
    }

    let edits = 0;
    if(Math.abs(lenDif) === 1){

        for(let i = 0; i < longStr.length; i++){
            if(longStr.splice(i) === shortStr) return true;
        }

    } else {

        for(let i=0; i < str1.length; i++){
            if(str1[i] !== str2[i]) edits++;
            if(edits > 1) return false;
        }

        return true;

    }

    return false;
}