// O(N*M) time | O(N*M) space, N is object.length, M is level of nested objects.
function collectStrings(object){
    const strs = [];
    function helper(obj){
        for(let item in obj){
            let value = obj[item];
            if(typeof value === 'string'){
                strs.push(value);
            }else if(typeof value === 'object' && value !== null && !Array.isArray(value)){
                helper(value);
            }
        }
    }
    helper(object);
    return strs;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])