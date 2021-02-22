// Diff approch for factorial using DP
// n = 7
// 1 1 2 3 5 8 13 21
// 1 2 3 4 5 6 7  8
// fib(1) = 1 and fib(2) = 1

function normalFibonacci(n) {
    if (n <= 2) {
        return 1
    }
    return normalFibonacci(n - 1) + normalFibonacci(n - 2)
}


// topdown approch
// Optimal Substructure
// . Enter Memoization!
function memoFibonacci(n, memo = { 0: undefined, 1: 1, 2: 1 }) {
    if (memo[n]) return memo[n]
    memo[n] = memoFibonacci(n - 1, memo) + memoFibonacci(n - 2, memo)
    // console.log(memo)
    return memo[n]
}



// Tabulation: A Bottom Up Approach
function itrativeFibonacci(n) {
    let fib = 1
    let x = 0, y = 1
    for (let i = 1; i < n; i++) {
        fib = x + y
        x = y
        y = fib
    }
    return fib
}

