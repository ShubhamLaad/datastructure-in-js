let arr1 = [{ a: 1 }, { b: 2, c: 3 }]
let arr2 = [{ a: 1 }, { c: 2, f: 3 }, { d: 2 }]

// lop 

//aary of key aar1 itrate obj = {ket : aar1[key] + aar2[key] || 0}
// {..obj1, ...obj2, obj}


function zip(arr1, arr2) {
    let i = 0
    const result = []
    const max = Math.max(arr1.length, arr2.length)
    while (i < max) {
        const objArr1 = arr1[i]
        const objArr2 = arr2[i]
        let keysArr1 = Object.keys(objArr1)
        const finalObj = { ...objArr1, ...objArr2 };
        keysArr1.forEach(key => {
            finalObj[key] = objArr1[key] + (objArr2 && objArr2[key] ? objArr2[key] : 0)
        })
        result.push(finalObj)
        i++
    }
    return result
}

console.log(zip(arr1, arr2))


dispatchEvent(aa())


/*
flex property with width height dynamic
SEO
redux state Y it should be imutable // check in code is it updating component or not(Diffing algo)
How browser works painting
more basic question solve on programing
*/

