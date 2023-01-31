const deepCopy = (struct) =>
  struct instanceof Array
    ? struct.map((elem) => deepCopy(elem))
    : struct instanceof Object
    ? Object.fromEntries(
        Object.entries(struct).map(([key, value]) => [key, deepCopy(value)])
      )
    : struct;

console.assert(deepCopy([1, [2, 3]]) === [1, [2, 3]]);
console.assert(deepCopy({ a: 1, b: { c: 2 } }) === { a: 1, b: { c: 2 } });
let copy1 = deepCopy([1, [2, 3]]);
console.log(copy1[1]);
