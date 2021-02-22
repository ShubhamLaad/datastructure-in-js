{/* <p>Write a recursive function called <strong>nestedEvenSum</strong>. Return the sum of all even numbers in an object which may contain nested objects.</p> */}

function nestedEvenSum(obj) {
  let sum = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if(typeof element === 'object' && element.constructor  === Object) {
        sum = sum + nestedEvenSum(element)
      } else if(typeof element === 'number' && element % 2 === 0) {
        sum = sum + element
      }
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
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10