function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}
function addf(x) {
  return function (y) {
    return x + y;
  };
}
function applyf(binary) {
  return function (x) {
    return function (y) {
      return binary(x, y);
    };
  };
}
function curry(binaryFn, firstArg) {
  return function (secondArg) {
    return binaryFn(firstArg, secondArg);
  };
}
let add3 = curry(add, 3);
console.log(curry(mul, 5)(6)); // soll 30

//First variant
let inc1 = addf(1);
//Second variant
let inc2 = applyf(add)(1);
//Third variant
let inc3 = curry(add, 1);

function methodize(binary) {
  return function (y) {
    return binary(this, y);
  };
}

Number.prototype.add = methodize(add);
console.log((3).add(4)); //soll 7

function demethodize(method) {
  return function (x, y) {
    return method.call(x, y);
  };
}
let binaryAdd = demethodize(Number.prototype.add);
console.log(binaryAdd(5, 6)); //soll 11

function twice(binary) {
  return function (x) {
    return binary(x, x);
  };
}
var double = twice(add);
console.log(double(11)); // soll 22

var square = twice(mul);
console.log(square(11)); // soll 121

function composeu(unary1, unary2) {
  return function (x) {
    return unary2(unary1(x));
  };
}

console.log(composeu(double, square)(3)); // soll 36

function composeb(binary1, binary2) {
  return function (x, y, z) {
    return binary2(binary1(x, y), z);
  };
}

console.log(composeb(add, mul)(2, 3, 5)); //soll 25

function counterf(start) {
  let count = start;
  return {
    inc: function () {
      count += 1;
      return count;
    },
    dec: function () {
      count -= 1;
      return count;
    },
  };
}
