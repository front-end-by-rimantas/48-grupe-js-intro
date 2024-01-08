const a = 3.1415;
const b = a.toFixed(2);

console.log(a, typeof a);
console.log(b, typeof b);

const c = parseInt(b) + parseInt(b);
console.log(c);

const d = parseFloat(b) + parseFloat(b);
console.log(d);

console.log(isNaN(3));
console.log(isNaN(NaN));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(14562));

console.clear();

console.log(Math.PI);
console.log(Math.E);

const max1 = Math.max(1, 2, 3);
console.log(max1);

const max2 = Math.max([1, 2, 3]);
console.log(max2);

const max3 = Math.max(...[1, 2, 3]);
console.log(max3);