const R = require("ramda");

const double = (x) => x * 2;

const a = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
// console.log(a);

const b = R.map(double, { x: 1, y: 2, z: 3 }); //=> {x: 2, y: 4, z: 6}
// console.log(b);

const _U = require("underscore");
const sum = _U.reduce(
  [1, 2, 3],
  function (memo, num) {
    return memo + num;
  },
  0
);
console.log("hasil dari sum", sum);

const _L = require("lodash");

var array = [1];
var other = _L.concat(array, 2, [3], [4]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
