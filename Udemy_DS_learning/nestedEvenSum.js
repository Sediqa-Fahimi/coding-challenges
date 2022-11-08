//O(N*M) time | O(M) space , where N is length of Obj and M is how many objects are ested.
function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for(let item in obj){
      let value = obj[item];
      if( typeof value === 'number' && value % 2 === 0){
          sum += value;
      }else if(typeof value === 'object' && value !== null && !Array.isArray(value)){
          sum += nestedEvenSum(value);
      }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10