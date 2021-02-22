{/* <p>Write a recursive function called <strong>someRecursive</strong> which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.</p> */}




// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(str, callback){
    if(!str.length) return false
  if(callback(str.pop())) return true;
   return someRecursive(str, callback)
}