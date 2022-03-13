function isArrange(arr) {
    let arrTraverse = arr.length - 1
    let isSortFirst = arr[0] < arr[1]

    let checkLess = isSortFirst
    let i = 0
    while (i < arrTraverse) {
        if (checkLess) {
            if (arr[i] < arr[i + 1]) {
                i++
                checkLess = !checkLess
            } else {
                return false
            }
        } else {
            if (arr[i] > arr[i + 1]) {
                i++
                checkLess = !checkLess
            } else {
                return false
            }
        }
    }
    if (i === arrTraverse) return true
}

function solution(A) {
    if (isArrange(A)) return 0

    let count = 0
    for (let i = 0; i < A.length; i++) {
        let newArr = [...A]
        newArr.splice(i, 1)
        if (isArrange(newArr)) {
            count++
        }
    }
    if (count) return count
    else return -1
}






//p().then(() => { }).catch(() => { })

function all(arr) {
    const results = []
    let countCallSuccess = 0
    let countCallError = 0

    return new Promise((resolve, reject) => {

        for (let i = 0; i <= arr.length; i++) {
            arr[i]
                .then(e => {
                    results[i] = e
                    countCallSuccess++
                    if (countCallSuccess + countCallError === arr.length) {
                        if (countCallError === 0)
                            resolve(results)
                        else
                            reject(results)
                    }
                })
                .catch(e => {
                    results[i] = e
                    countCallError++
                    if (countCallSuccess + countCallError === arr.length) {
                        reject(results)
                    }
                })
        }


    })
}



// {[]}

// {[}]

// [{

// [{

// [ ]

