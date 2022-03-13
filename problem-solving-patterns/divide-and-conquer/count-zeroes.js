// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(arr) {
  //get middle
  //if middle is 1, left to middle + 1  in that check for right is 0 then result
  //if middle is 0,  move right
  let left = 0;
  let right = arr.length - 1;
  for (left < right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === 1) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return arr.length - left;
}

console.log(countZeroes([1, 1, 1, 1, 1, 0])); // 1
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 1, 1, 0, 0, 0])); // 3
console.log(countZeroes([1, 1, 0, 0, 0, 0])); // 4
console.log(countZeroes([1, 0, 0, 0, 0, 0])); // 5
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
console.log(countZeroes([1, 0])); // 1
console.log(countZeroes([0])); // 1
console.log(countZeroes([])); // 0