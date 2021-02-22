/*Write a function called <b>sameFrequency. </b>Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities
Time: O(N)
Sample Input:
<ol class="linenums">
sameFrequency(182,281)// true
sameFrequency(34,14)// false
sameFrequency(3589578,141313)
sameFrequency(22,222)// false


*/


function sameFrequency(dig1 = '', dig2 = '') {
    const a = dig1.toString()
    const b = dig2.toString()

    if (a.length !== b.length) {
        return false;
    }
    const objA = {}
    const objB = {}
    for (let char of a) {
        objA[char] = (objA[char] || 0) + 1
    }
    for (let char of b) {
        objB[char] = (objB[char] || 0) + 1
    }
    for (let key in objA) {
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true
}