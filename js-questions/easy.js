
1 + '12'
1 - '12'
'4s' - 2
'2' * '3'

// write logic

// abcaec
// abcdef

// shubhamlaad
// shubcam


// Sort the array
arr = [{ age: 25, name: 'Shubham' }, { age: 23, name: 'Ujjwal' }]


//////////////////
obj1 = {
    a: 1,
    b: {
        c: 30
    }
}

obj2 = { ...obj1 }
obj2.a = 20
obj2.b.c = 40

// obj1.a
// obj1.b.c


//////

obj2 = createDeepCopy(obj1)

////////////////////////
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
console.log(3)

///////////////////////
function checkOutput() {

    var a = 1;
    {
        var b = 2;
        console.log(a, b)

    }
    console.log(a, b)
}
checkOutput()

console.log(a, b)

//////////////////////
function foo() {
    return Promise.resolve(1)
}

console.log(1)
foo().then(a => console.log(2))
console.log(3)


