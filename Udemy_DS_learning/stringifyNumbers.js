//O(N*M(k) time | O(N+M(K)) space, N is length od Obj, M is level of nested objs, K is size of value number.
function stringifyNumbers(obj){
    const newObj = JSON.parse(JSON.stringify(obj)); // deep copy the object with nested objects.
    function helper(object){
        for(let item in object){
            let value = object[item];
            if(typeof value === 'number'){
                object[item] = value.toString();
            }else if(typeof value === 'object' && value !== null && !Array.isArray(value)){
                helper(value);
            }
        }
    }
    helper(newObj);
    return newObj;
}
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/