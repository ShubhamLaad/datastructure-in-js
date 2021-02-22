//<p>Write a function called <strong>recursiveRange</strong> which accepts a number and adds up all the numbers from 0 to the number passed to the function&nbsp;</p>

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(n){
    if(n === 0) {return }
   return n + recursiveRange(n -1 )
}
