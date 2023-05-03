// out put
function y() {
  console.log(this);
}
var x = {
  method: function () {
    arguments[0]();
  },
};
x.method(y, 1);

//////////////////////////////
a = [
  1,
  function () {
    return this;
  },
  3,
];
b = {
  0: 1,
  1: function () {
    return this;
  },
};
b[1]();
a[1]();

////////////
// write logic

// abcaec
// abcdef
