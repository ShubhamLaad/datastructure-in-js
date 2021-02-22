function mergeArr(arr1, arr2) {
    let i = 0, j = 0, result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] < arr1[i]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

function mergeSort() {

}

console.log(mergeArr([2, 5, 8], [1, 3, 6, 8, 10, 14]))
