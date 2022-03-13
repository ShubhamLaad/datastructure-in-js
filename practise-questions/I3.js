function fn(param) {
    if (param === 1) return false
    for (let i = 1; i <= Math.sqrt(param) + 1; i++) {
        let fistNumber = i * i;
        let secondNumber = param - fistNumber;
        if (Number.isInteger(Math.sqrt(secondNumber))) return true
    }

    return false;
}


console.log(1, fn(1), 'false?'); // false
console.log(2, fn(2), 'true?'); // true
console.log(4, fn(4), 'false?'); // false
console.log(5, fn(5), 'true?'); // true
console.log(6, fn(6), 'false?'); // false
console.log(12, fn(12), 'false?'); // false