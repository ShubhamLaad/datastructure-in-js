/*
Divide and Conquer - sortedFrequency</div>
            <p>Given a sorted array and a number, write a function called <b>sortedFrequency</b> that counts the
                occurrences of the number in the array </p>

        <p>Time Complexity - <b>O(log n)</b></p>

*/

function sortedFrequency(arr, number) {
    let left = 0, right = arr.length - 1;
    let found = -1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left

        if (arr[middle] > number) {
            right = middle - 1
        } else if (arr[middle] < number) {
            left = middle + 1
        } else {
            found = middle
            break;
        }
    }
    if (found === -1) return found
    let l = found, r = found;
    for (; arr[l] === number; l--);
    for (; arr[r] === number; r++);
    return r - l - 1
}
r = 0
test('sortedFrequency([1, 2, 2, 2, 3, 3, 4], 1)', 1)
test('sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3, 4], 1)', 2)

test('sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3, 4], 3)', 2)


test('sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)', -1)