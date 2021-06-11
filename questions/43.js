function findRotatedIndex(arr, number) {
    const p = getPivot(arr)
    const end = arr.length - 1
    if (p === 0) {
        return binarySearch(arr, 0, end, number)
    }
    if (number > arr[end]) {
        return binarySearch(arr, 0, p, number)
    } else {
        return binarySearch(arr, p + 1, end, number)
    }
}

function binarySearch(arr, left, right, number) {
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left
        if (arr[middle] === number) return middle
        if (number < middle) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

function getPivot(arr) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left

        if (arr[middle] > arr[left]) {
            if (arr[middle + 1] < arr[left]) {
                return middle
            } else {
                // left side is in order
                left = middle + 1
            }
        } else {
            // middle < left
            if (arr[middle - 1] < arr[left]) {
                right = middle - 1
            } else {
                return middle - 1
            }
        }
    }
    return 0
}


test('findRotatedIndex([8,9,10,11, 1,3, 6, 7], 3)', 5)
test('findRotatedIndex([9,10,11, 55, 66 , 99], 55)', 3)

////////////////////////0 1  2  3  4  5  6  7  8  9 10 11 12


// middle > left left side