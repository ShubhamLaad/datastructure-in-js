// <p>Write a recursive function called <strong>capitalizeFirst</strong>. Given an array of strings, capitalize the first letter of each string in the array.</p>
function capitalizeWord(str) {
    return str[0].toLocaleUpperCase() + str.slice(1)
}

function capitalizeFirst (arr) {
    if(arr.length === 0) return ''
    return [capitalizeWord(arr[0]),  ...capitalizeFirst(arr.slice(1))]
}
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']