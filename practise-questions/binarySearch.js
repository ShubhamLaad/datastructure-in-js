function binarySearch(arr, val) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (val > arr[mid]) {
            left = mid + 1
        } else if (val < arr[mid]) {
            right = mid - 1
        } else {
            return mid;
        }
    }
    return -1;
}

function binarySearch(arr, val, left = 0, right) {
    if (!right) { right = arr.length - 1 }
    if (left > right) return -1
    let mid = Math.floor((left + right) / 2)
    if (val > arr[mid]) {
        left = mid + 1
    } else if (val < arr[mid]) {
        right = mid - 1
    } else {
        return mid;
    }
    return binarySearch(arr, val, left, right)
}