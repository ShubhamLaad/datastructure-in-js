## JavaScript Algorithms and Data Structures Masterclass on Udemy
Link to course: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/?persist_locale&locale=en_US

### How to write program
Step 1: Understand The Problem
Step 2: Concrete Examples => ask question type of input / output
Step 3: Break It Down => write code in words or rough idea(sudo code) on notepade or in code
Step 4: Solve Or Simplify  =>
     Find core difficulty what trying to do
     Tmp igonere that dificulty
write si mplified solution
then incorporate that difficulty back in

#### Coding Exercises of the course:
- [Problem solving patterns](problem-solving-patterns)
    - [Frequency Counter Pattern](problem-solving-patterns/frequency-counter)
    - [Multiple Pointers Pattern](problem-solving-patterns/multiple-pointers)
    - [Sliding Window Pattern](problem-solving-patterns/sliding-window)
    - [Divide And Conquer Pattern](problem-solving-patterns/divide-and-conquer)
- [Bit manipulation](bit-manipulation) ?
- [Recursion](recursion)
- [Sorting Algorithms](sorting-algorithms)
    - [JS Sort](sorting-algorithms/js-sort.js)
    - [Bubble Sort](sorting-algorithms/bubbleSort.js)
    - [Selection Sort](sorting-algorithms/selectionSort.js)
    - [Insertion Sort](sorting-algorithms/insertionSort.js)
    - [Merge Sort](sorting-algorithms/mergeSort.js)
    - [Quick Sort](sorting-algorithms/quickSort.js)
    - [Radix Sort](sorting-algorithms/radixSort.js) ?
- [Linked List](data-structures)
    - [Singly Linked List](data-structures/SinglyLinkList.js)
    - [Doubly Linked List](data-structures/DoublyLinkList.js)
    - [Stack](data-structures/Stack.js)
    - [Queue](data-structures/Queue.js)
    - [Binary Search Tree](data-structures/BinarySearchTree.js)
    - [Binary Heap](data-structures/BinaryHeap.js)
    - [Priority Queue](data-structures/PriorityQueue.js)
    - [Hash Table](data-structures/hashtable.js) ?
    - [Graph](data-structures/Graph.js)
    - [WeightedGraph](data-structures/WeightedGraph.js.js)
    - [Trie](data-structures/trie.js) ?
- [Dynamic Programming](dynamic-programming) `progress`
- [Other algorithms](other-algorithms) ?
    - [Factorial of large number](other-algorithms/factorial-of-large-number.js)
- [Practise Questions](practise-questions)

### Problem Solving Patterns
Frequency Counter
Multiple Pointers
Sliding Window
Divide and Conquer
Dynamic Programming
Greedy Algorithms
Backtracking
> https://cs.slides.com/colt_steele/problem-solving-patterns

- [JS Sort](sorting-algorithms/js-sort.js)
```
    function comparator(num1, num2) {
        return num1 - num2 // num1 comes 1st if return -1, means num1 < num2
    }
```

### Recursion
recursions store function in call stack until break points comes then it pop from stack.
- [Merge Sort](sorting-algorithms/mergeSort.js)

##### eg of factorial of number
mathametical representation of code
```
fac(n) = fac(n-1) * n, where n > 0 and fac(1) = 1
```
*** breaking condition:** return result of function on constant value

Code:
```
function fac(n) {
    if(n === 1) {
        return 1; // break condition
    }
    return fac(n-1) * n;
}

```

> for breath first use queue
> for depth first use stack


#### Tree
// PreorityQueue insert Olog(n) (log base 2 n)
// removal also hv Olog(n)

// PriorityQueue is min binary tree but have node with priority values
// WeightGraph Dijkstra algo things learn is priority queue can have multiple values and try to use different DS for diffrent types of opration. Like here we use priority queue as well as object for storing distance.
where object only use for storing and with unic value
where priority queue only use for getting sort value here value can be repeatative



### Interview

objec freez
event loop, callback work, web workers
strict mode = global var not allowod, keyword as variable not allowed
//curring

how to cancel/abort ajax request in axios =>
        const cancelTokenSource = axios.CancelToken.source();

        axios.get('/user/12345', {
            cancelToken: cancelTokenSource.token
        });

        // Cancel request
        cancelTokenSource.cancel();


Promise.all = Return in array when all promise success if any promise reject return that one
unit testing

axios token managment = Axios Interceptors


###### JQ

flex property with width height dynamic
SEO
redux state Y it should be imutable // check in code is it updating component or not(Diffing algo)
How browser works painting
more basic question solve on programing


=> arrow function diff from fun 
Arrow functions establish "this" based on the scope the Arrow function is defined within.
Y => do not have constructor

bind(this)

how memory leak handle in JS

Symbol
real life example of closer => access spacifier
how const work in js

React
function component how work


###### React

hof =  A Higher-Order function is a function that receives a function as an argument or returns the function as output.
reducer, msp, filter

web worker/ web api


Context implementation


forwarding ref


diff ex of hooks


