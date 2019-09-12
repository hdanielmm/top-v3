
// 1 1 2 3 5 8 13 21 34
function fib(n) {
  return fibRec(n, {});
}

function fibRec(n, memo) {
  // caso trivial
  if (n <= 1) {
    return 1;
  }

  // caso general
  if (memo[n-1]) {
    var f1 = memo[n - 1];
  } else {
    var f1 = fibRec(n - 1, memo);
    memo[n-1] = f1;
  }

  if (memo[n-2]) {
    var f2 = memo[n - 2];
  } else {
    var f2 = fibRec(n - 2, memo);
    memo[n-2] = f2;
  }

  return f1 + f2;
}

//console.log(fib(1)); // 1
//console.log(fib(2)); // 2
//console.log(fib(3)); // 3
//console.log(fib(4)); // 5
//console.log(fib(5)); // 8
//console.log(fib(6)); // 13
console.log(fib(0));
