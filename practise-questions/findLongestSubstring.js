function findLongestSubstring(arr) {
    let left = 0, right = 0, seen = {}, max = 0;
    while (right < arr.length) {
        const char = arr[right]
        const charLocation = seen[char]
        if (charLocation >= 0 && charLocation >= left) {
            max = Math.max(max, right - left)
            left = charLocation + 1
        }
        seen[char] = right
        right++
    }
    return Math.max(max, right - left)
}

console.log(findLongestSubstring('bx')); // 2
console.log(findLongestSubstring('rithmschool'))// 7
console.log(findLongestSubstring('thisisawesome'))// 6
console.log(findLongestSubstring('thecatinthe'))//7
console.log(findLongestSubstring('bbbbbb'))// 1
console.log(findLongestSubstring('longestsubstring'))// 8
console.log(findLongestSubstring('thisishowwedoit'))// 6
console.log(findLongestSubstring('tmmabct'))//5
