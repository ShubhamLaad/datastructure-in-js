// <p>Write a recursive function called <strong>isPalindrome</strong> which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.</p>


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if(str.length <= 1) return true;
   if(str[0] === str[str.length - 1]) {
         return isPalindrome(str.substring(1, str.length - 1))
    }
    return false;
 }