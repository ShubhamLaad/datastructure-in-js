// <p>Write a recursive function called <strong>reverse</strong> which accepts a string and returns a new string in reverse.</p>


function reverse(str){
    if(!str) return '';
  return str[str.length - 1] + reverse(str.substring(0, str.length -1 ))
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'