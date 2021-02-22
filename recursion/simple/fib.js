{/* <p>Write a recursive function called <strong>fib</strong> which accepts a number and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.</p> */}





// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if(n === 0) return 0
    if(n === 1) return 1
return fib(n -1 ) + fib(n-2)
}