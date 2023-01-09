// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1

//"(coder)(byte))"

// (djdjd(hedhd))
// (ss()())
//((xfhsfh)hdhd)

function checkBracket(str) {
  const matchBracket = {};
  for (let i = 0; i < str.length; i++) {
    const elememt = str[i];
    if (elememt === '(') {
      matchBracket['('] = (matchBracket['('] || 0) + 1;
    } else if (elememt === ')') {
      matchBracket[')'] = (matchBracket[')'] || 0) + 1;
    }
  }
  if (matchBracket['('] === matchBracket[')']) return 1;
  return 0;
}
