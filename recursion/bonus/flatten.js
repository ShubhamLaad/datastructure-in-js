{/* <p>Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and returns a new array with all values flattened.</p> */}

function flatten(arr){
    let output = []
   for(let i = 0; i< arr.length; i++) {
        if(typeof arr[i] === 'object') {
             output = [...output, ...(flatten(arr[i]))]
        } else {
            output.push(arr[i])
        }
    }
    return output;
    
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3