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

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))
    console.log({ left }, { right })
    return mergeArr(left, right)
}

// console.log(mergeArr([2, 5, 8], [1, 3, 6, 8, 10, 14]))
console.log(mergeSort([11, 2, 22, 9]))


     //     [11,        2,      22,      9]
     
     //mergeSort[11,2]
     
     
     //mergeSort[11]     mergeSort[2] 

     // [11]                [2]

     //     [2, 11]

     //                                   mergeSort(22,9)
     //            mergeSort(22)                mergeSort(9)
    //              [22]                            [9]
    //                          [9, 22]

    
    //  mergeSort([2,11], [9,22])

