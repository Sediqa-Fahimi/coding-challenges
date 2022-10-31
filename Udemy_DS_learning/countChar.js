function countChar(str){
    // create counts hash
    const counts = {}
    // loop through the str
    for(let char of str){
        if (/[a-zA-Z0-9]/.test(char)){
            char = char.toLowerCase();
            counts[char] = ++counts[char] || 1; // ++counts[char] return the value after incrementing it.
        }
    }
    //return counts hash
    return counts;
}




console.log(countChar("Hello World!"));
/* 
    {
        h: 1,
        e: 1,
        l: 3,
        o: 2,
        w: 1,
        r: 1,
        d: 1
    }
*/
console.log(countChar("Count 1 to 9 and a to z ..."));
/* 
    {
        1: 1,
        9: 1,
        c: 1,
        o: 3,
        u: 1,
        n: 2,
        t: 3,
        a: 2,
        d: 1,
        z: 1
    }
*/