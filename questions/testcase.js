function test(input, ouput) {
    console.log(`${input} %cexpected %c ${eval(input)} %cto be`, 'color: blue', 'color:black', 'color:blue', `${ouput}`)
}
