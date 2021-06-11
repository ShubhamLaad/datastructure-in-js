# datastructure-in-js
udemy DS questions and notes

## Notes
https://cs.slides.com/colt_steele/problem-solving-patterns

### Problem Solving Patterns
Frequency Counter
Multiple Pointers
Sliding Window
Divide and Conquer
Dynamic Programming
Greedy Algorithms
Backtracking

### Frequency Counter
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

recursions store function in call stack until break points comes then it pop from stack.
Break point: function which run full is pop from stack its not mandatory that it has return statement.
eg: look DFS function of tree


for breadth first use queue
for defth first use stack


// PreorityQueue insert Olog(n) (log base 2 n)
// removal also hv Olog(n)

// PriorityQueue is min binary tree but have node with priority values
// WeightGraph dijkstra algo things learn is priority queue can hve multiple values and try to use diff DS for diffrent types of opration. Like here we use priority queue as well as object for storing distace.
where object only use for storing and with unic value
where priority queue only use for getting sort value here value can be repeatative



### Divide and Conquer
When arry is sorted this method algo can apply







Interview

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


JP Q=>

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


nagarow

hof =  A Higher-Order function is a function that receives a function as an argument or returns the function as output.
reducer, msp, filter

web worker/ web api


Context implementation


forwarding ref


diff ex of hooks