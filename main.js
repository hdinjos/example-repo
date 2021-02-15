const double = (x) => x * 2;

const a = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
console.log(a);

const b = R.map(double, { x: 1, y: 2, z: 3 }); //=> {x: 2, y: 4, z: 6}
console.log(b);
