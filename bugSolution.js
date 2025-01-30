function foo(x){
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1

function foo2(x){
  if (x === null || x === undefined) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(foo2(null)); // Output: 0
console.log(foo2(undefined)); // Output: 0 