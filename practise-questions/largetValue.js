function largetValue(arr) {
  let max = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function secondLargetValue(arr) {
  let max = -Infinity;
  let smax = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    }
  }
  return smax;
}
arr = [4, 10, 5, 55, 1];

max = arr[i];
smax = max;

// think logic in rough diagram
// write algo
// actual program worst solution at least pass ideal case
// improve thye logic(time complexity, redability, mantainabilitiy)
// check test cases

// loop
// loop will eritew logic to check adh\jsent value and swap if left side in larger

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

for (let i = 0; i < arr.length; i++) {
  // n
  for (let j = 0; j < arr.length - i - 1; j++) {
    // n -i
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      swaped = true;
    }
  }
}

// map = new HashMap();

// map.set(key, value)

// {
//   key: value,
// }

// map.get(key) // O(1)

// [1,0,1,0,1,1,1,0,0, 3, 3, 3]

// newValue =map.get(1)  + 1
// map.set(1, newValue)
