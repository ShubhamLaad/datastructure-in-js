console.log('%c Hi bubble', 'background: yellow')
// Swap on ervery step and every itration large element will be at last
function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b
        }
    }


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function descSort(a, b) {
    return b - a
}
test('bubbleSort([0, -10, 7, 4], descSort)', [7, 4, 0, -10])

test('bubbleSort([1, 3, 5, 2, 3])', [1, 2, 3, 3, 5])
// test('bubbleSort([])', '')
// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// var sorted = [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
// test(`bubbleSort(nums)`, sorted);


/*
    Implement a function called
        <strong>bubbleSort</strong>. Given an array, bubbleSort will sort the values in the array. The function
        takes 2 parameters: an array and an optional comparator function.
*/


/*
    <p>The comparator function is a callback that will take two values from the array to be compared. The function
        returns a negative value if the first value is less than the second, a positive value if the first value is
        greater than the second, and 0 if both values are equal.</p>
    <p>The default comparator you provide should assume that the two parameters are numbers and that we are sorting
        the values from smallest to largest.</p>
    <p>Bubble sort is an O(n^2) algorithm. You can read more about it here:
        https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms</p>
*/

function stringSort(a, b) {
    if (a < b) return -1
    if (b > a) return 1
    return 0
}


var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const sortedKitties = ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
test('kitties.sort(stringSort)', sortedKitties)
test('bubbleSort(kitties, stringSort)', sortedKitties)

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

console.log(bubbleSort(moarKittyData, oldestToYoungest)); //sorted by age in descending order
