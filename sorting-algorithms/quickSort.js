function pivot(arr, start = 0, end = arr.length - 1) {
    const pivot = arr[start];
    let swapIndex = start + 1;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            // Swap this i with swapIndex
            swap(arr, i, swapIndex)
            // increase the swapIndex
            swapIndex++;

        }
    }
    // swap pivot with swapIndex - 1
    swap(arr, start, swapIndex - 1)
    return swapIndex - 1
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    const pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
    return arr
}



function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}

const arr = [9, 13, 5, 7, 10]
console.log(quickSort(arr))