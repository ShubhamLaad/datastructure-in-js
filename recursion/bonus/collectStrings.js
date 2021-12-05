// <p>Write a function called&nbsp;<code>collectStrings</code>&nbsp;which accepts an object and 
// returns an array of all the values in the object that have a typeof string</p>

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
    let arr = []
    for (const key in obj) {
        const element = obj[key];
        if (typeof element === 'string') {
            arr.push(element)
        } else if (typeof element === 'object' && element.constructor === Object) {
            arr = [...arr, ...collectStrings(element)]
        }
    }
    return arr
}
