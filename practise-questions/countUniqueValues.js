
countUniqueValues([-1, -1, 0, 1, 1, 2, 3, 3, 3]) // 5
countUniqueValues([0, 1, 1, 2, 3, 3, 3]) // 4
countUniqueValues([]) //0

function countUniqueValues(arr) {
    let value = undefined;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (value !== arr[i]) {
            value = arr[i]
            count += 1;
        }
    }
    return count;

}


