/*

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called <b>countZeroes</b>, which returns the number of zeroes in the array.</p>

countZeroes([1,1,1,1,0,0])// 2
countZeroes([1,0,0,0,0])// 4
countZeroes([0,0,0])// 3
countZeroes([1,1,1,1])// 0





<p>Time Complexity - <b>O(log n) </b></p></div>

[1, 1, 1 ,1 , 0]
0   1  2   3   4
           l
*/


function countZeroes(arr) {
    let right = arr.length - 1
    let left = 0;

    if (arr[left] === 0) {
        while (right >= left) {
            let middle = Math.floor((right - left) / 2) + left
            if (arr[middle] === 1 && arr[middle + 1] === 0) {
                // succes condition
                return arr.length - middle - 1
            }
            if (arr[middle] === 0) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return 0
    }
}