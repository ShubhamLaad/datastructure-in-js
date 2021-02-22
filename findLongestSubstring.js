function findLongestSubstring(arr) {
    let left = 0, right = 0, obj = {}, max = 0;
    while (right < arr.length) {
        const char = arr[right]
        const charLocation = obj[char]
        if (charLocation >= 0 && charLocation >= left) {
            max = Math.max(max, right - left)
            left = charLocation + 1
        }
        obj[char] = right
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


// What u learn
// Step 1: Understand The Problem
// Step 2: Concrete Examples => ask question type of input / output
// Step 3: Break It Down => write code in words or rough idea(sudo code) on notepade or in code
// Step 4: Solve Or Simplify  =>
//      Find core difficulty what trying to do
//      Tmp igonere that dificulty
// write si mplified solutyion
// then incorporate that difficulty back in