function comparator(num1, num2) {
  return num1 - num2 // num1 comes 1st if return -1, means num1 < num2
}

const arr = [22, 4, 77, 1, 23, 55]

arr.sort(comparator)