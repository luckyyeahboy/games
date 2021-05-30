function *increase() {
    yield 1,
    yield 10,
    yield 2;
};

let generator = increase();

console.log(generator);

let arr = new WeakSet([{}, {}, {}]);
console.log(arr)
// for(let value of arr) {
//     console.log(value, arr);
// }