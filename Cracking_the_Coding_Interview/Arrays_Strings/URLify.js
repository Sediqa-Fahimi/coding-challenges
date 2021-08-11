// O(n) time | O(n) space;
function URLify(str, trueLength){
    const array = str.split("");

    let midSpaces = countMidSpaces(array, 0, trueLength - 1,' ');
    const lengthToFill = trueLength + (midSpaces * 2); // calculating this to avoid excess spaces in the end.
    if(str.length > lengthToFill) array[lengthToFill] = '\0'; // insert null character indicating '%20' has not been added after this point.
    let diff = lengthToFill - trueLength; //how many indices i would jump.

    let i = lengthToFill - 1;
    while(i >= 0){
        if(array[i - diff] === ' '){
            midSpaces--;
            array[i] = '0';
            array[i-1] = '2';
            array[i-2] = '%';
            i -= 3;
            diff -= 2; //we filled 2 spaces at the end, i will jump 2 number less(difference has decreased by 2);
            if(midSpaces === 0) break;
        } else {
            array[i] = array[i - diff];
            i--;
        }
    }
    return array.join("");
}

function countMidSpaces(strArray, start, end, target){
    let count = 0;
    for(let i = start; i <= end ; i++){
        if(strArray[i] === target) count++;
    }
    return count;
}

// Tests:
console.log(URLify('Mr John Smith             ',13)); 
console.log(URLify('Hello World  ',11));
console.log(URLify('My name is Tara           ',15));