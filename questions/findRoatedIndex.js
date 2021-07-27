// 43

function findRotatedIndex(arr, number) {
    const p = getPivot(arr)
    const end = arr.length - 1
    if (p === 0) {
        return binarySearch(arr, 0, end, number)
    }
    if (number > arr[end]) {
        return binarySearch(arr, 0, p, number)
    }
    return binarySearch(arr, p + 1, end, number)

}

function binarySearch(arr, left, right, number) {
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left
        if (arr[middle] === number) return middle
        if (number < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

function getPivot(arr) {
    let left = 0, right = arr.length - 1;
    const firstElement = arr[0]
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left

        if (arr[middle] > firstElement) {
            if (arr[middle + 1] < firstElement) {
                return middle
            } else {
                // left side is in order
                left = middle + 1
            }
        } else {
            // middle < left
            if (arr[middle - 1] < firstElement) {
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
test('findRotatedIndex([6,7,8,9,1,2,3,4], 3)', 6)
test('findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)', 5)


////////////////////////0 1  2  3  4  5  6  7  8  9 10 11 12


// middle > left left side