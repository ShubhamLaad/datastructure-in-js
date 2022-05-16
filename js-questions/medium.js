async function fff() {
    const a = 2;
    console.log('fff')
}
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
fff()
console.log(3)


//////////////////

async function fff() {
    const a = await 2;
    console.log('fff')
}
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
fff()
console.log(3)


/////////////


async function foo() {
    return 1
}
console.log(1)
foo().then(a => console.log(2))
console.log(3)