console.log('%c Hi insertionSort', 'background: yellow')

function insertInSortedArr(sortedArr, value) {
    for (let i = sortedArr.length - 1; i >= 0; i--) {
        if (value < sortedArr[i]) {
            sortedArr[i + 1] = sortedArr[i]
        } else {
            sortedArr[i + 1] = value
            return sortedArr
        }
    }
    sortedArr[0] = value
    return sortedArr
}

// test('insertInSortedArr([2,5,7,9,18], 6)', [2, 5, 6, 7, 9, 18])

function insertionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b
        }
    }


    let sortedArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        sortedArr = insertInSortedArr(sortedArr, arr[i])
    }
    return sortedArr
}

function descSort(a, b) {
    return b - a
}
test('insertionSort([0, -10, 7, 4], descSort)', [7, 4, 0, -10])

test('insertionSort([1, 3, 5, 2, 3])', [1, 2, 3, 3, 5])
test('insertionSort([])', '')
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
var sorted = [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
test(`insertionSort(nums)`, sorted);


function stringSort(a, b) {
    if (a < b) return -1
    if (b > a) return 1
    return 0
}


var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const sortedKitties = ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// test('kitties.sort(stringSort)', sortedKitties)
// test('insertionSort(kitties, stringSort)', sortedKitties)

var moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}]
function oldestToYoungest(a, b) {
    return a.age - b.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest)); //sorted by age in descending order





/*
<p>Implement <code>insertionSort</code>&nbsp; . Given an array, both algorithms will sort the values in the
array. The functions take 2 parameters: an array and an optional comparator function. The comparator
function is a callback that will take two values from the array to be compared. The function returns a
negative value if the first value is less than the second, a positive value if the first value is greater
than the second, and 0 if both values are equal. The default comparator you provide should assume that the
two parameters are numbers and that we are sorting the values from smallest to largest.</p>

<p><strong>Insertion Sort</strong></p>







<p>Here's some guidance for how insertion sort should work:</p>







<ul>
<li>Start by picking the second element in the array (we will assume the first element is the start of the
    "sorted" portion)
</li>
<li>Now compare the second element with the one before it and swap if necessary.
</li>
<li>Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to
    place the element in the correct place.
</li>
<li>Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and
    return an array of sorted values.
</li>
</ul>







<p><strong>Examples</strong></p>
*/