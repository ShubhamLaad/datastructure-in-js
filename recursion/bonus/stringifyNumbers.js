// <p>Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!</p>


function stringifyNumbers(obj) {
    const newObj = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            if (typeof element === 'number') {
                newObj[key] = element.toString();
            } else if (typeof element === 'object' && element.constructor === Object) {
                newObj[key] = stringifyNumbers(element)
            } else {
                newObj[key] = element;
            }
        }
    }
    return newObj;
}



/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/