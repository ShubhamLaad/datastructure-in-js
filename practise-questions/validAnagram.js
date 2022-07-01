/* Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the first.
 An anagram is a word, phrase, or name formed by rearranging the letters of another, such as:
Examples: */

validAnagram('aaz', 'zza')// false
validAnagram('anagram', 'nagaram')// true
validAnagram("rat", "n")
validAnagram('awesome', 'awesom')// false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')// false
validAnagram('qwerty', 'qeywrt')// true
validAnagram('texttwisttime', 'timetwisttext')// true

function validAnagram(a = '', b = '') {

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
