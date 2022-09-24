//refactor some ES5 code into ES2015.

//ES5 Map Callback
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//ES2015 Arrow Functions Shorthand
//Refactor the above code to use two arrow functions. Turn it into a one-liner.

/* Write an ES2015 Version */

function double(arr) {
  return arr.map((val) => val * 2);
}
let doubleHolder = double([5, 2, 6, 11]);
console.log(doubleHolder);

// Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

/* ES2015 Version */
function squareAndFindEvens(numbers) {
  /*
  const squares = numbers.map((num) => num ** 2);
  return squares.filter((square) => square % 2 === 0);
  */
  return numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
}

let squareAndFindEvensHolder = squareAndFindEvens([1, 2, 3, 4, 5, 6]);
console.log(squareAndFindEvensHolder);
