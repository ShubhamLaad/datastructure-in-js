//<p>Write a function called&nbsp;<code>productOfArray</code>&nbsp;which takes in an array of numbers and returns the product of them all.</p>


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    const newArr = [...arr]
    const value = newArr.pop();
    if(!arr.length) {
        return 1;
    }
    return value * productOfArray(newArr);
}