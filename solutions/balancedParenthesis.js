// # Balanced Parenthesis
//
// <!-- Write a function called `isBalanced` that receives a string and returns true if
// the parenthesis are balanced, false otherwise: -->


function isBalanced(str) {
  var pop = 0;
  var push = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "(") {
      push++;
    } else {
      pop++;
    }
  }
  if(pop === push) {
    return true
  }
  return false;
}

// ```javascript
console.log(isBalanced("(((())))")); // true
console.log(isBalanced("(((()))")); // false
console.log(isBalanced("())(()")); // false


// <!-- **Note:** Think how you can use one of the learned data structures to solve this exercise. -->
