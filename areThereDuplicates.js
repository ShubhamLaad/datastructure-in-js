/* <p>Implement a function called, <strong>areThereDuplicates</strong> which accepts a <strong>variable number of arguments, </strong>and<em> </em>checks whether there are any duplicates among the arguments passed in.&nbsp; You can solve this using the frequency counter pattern OR the multiple pointers pattern.</p> */

/* 

areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'a') // true
*/

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates(...args) {
    const obj = {};
    for (let e of args) {
        obj[e] = (obj[e] || 0) + 1
        if (obj[e] === 2) {
            return true
        }
    }
    return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}