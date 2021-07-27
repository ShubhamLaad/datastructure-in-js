console.log('%c Hi selection', 'background: yellow')

function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = function (a, b) {
            return a - b
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let minimum = i
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[minimum]) < 0) {
                minimum = j
            }
        }
        // swap
        [arr[minimum], arr[i]] = [arr[i], arr[minimum]]

    }
    return arr
}

function descSort(a, b) {
    return b - a
}
// test('selectionSort([0, -10, 7, 4], descSort)', [7, 4, 0, -10])

test('selectionSort([1, 3, 5, 2, 3])', [1, 2, 3, 3, 5])
// test('selectionSort([])', '')
// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// var sorted = [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
// test(`selectionSort(nums)`, sorted);


function stringSort(a, b) {
    if (a < b) return -1
    if (b > a) return 1
    return 0
}


var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const sortedKitties = ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// test('kitties.sort(stringSort)', sortedKitties)
// test('selectionSort(kitties, stringSort)', sortedKitties)

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

console.log(selectionSort(moarKittyData, oldestToYoungest)); //sorted by age in descending order







/*
<p><strong>Selection Sort</strong></p>

<p>Here's some guidance for how selection sort should work:</p>





<ul>
    <li>Assign the first element to be the smallest value (this is called the minimum). It does not matter right
        now if this actually the smallest value in the array.
    </li>
    <li>Compare this item to the next item in the array until you find a smaller number.
    </li>
    <li>If a smaller number is found, designate that smaller number to be the new "minimum" and continue until
        the end of the array.
    </li>
    <li>If the "minimum" is not the value (index) you initially began with, swap the two values. You will now
        see that the beginning of the array is in the correct order (similar to how after the first iteration of
        bubble sort, we know the rightmost element is in its correct place).
    </li>
    <li>Repeat this with the next element until the array is sorted.
    </li>
</ul>





<p>This algorithm has a O(n^2) time complexity. You can read more about them here:
    https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms </p>





<p><strong>Examples</strong></p>





<p><strong>Selection Sort</strong></p>

<p>Here's some guidance for how selection sort should work:</p>





<ul>
    <li>Assign the first element to be the smallest value (this is called the minimum). It does not matter
        right now if this actually the smallest value in the array.
    </li>
    <li>Compare this item to the next item in the array until you find a smaller number.
    </li>
    <li>If a smaller number is found, designate that smaller number to be the new "minimum" and continue
        until the end of the array.
    </li>
    <li>If the "minimum" is not the value (index) you initially began with, swap the two values. You will
        now see that the beginning of the array is in the correct order (similar to how after the first
        iteration of bubble sort, we know the rightmost element is in its correct place).
    </li>
    <li>Repeat this with the next element until the array is sorted.
    </li>
</ul>





<p>This algorithm has a O(n^2) time complexity. You can read more about them here:
    https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
</p>





<p><strong>Examples</strong></p>


*/

