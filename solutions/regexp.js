// # Expresiones Regulares
//
// Solucionar estos ejercicios:
//
// 1. Write a regular expression to check if a string is a valid car plate:


var r = /[A-Z]{3}[0-9]{3}/
r.test("hello"); // false
r.test("MVV387"); // true
r.test("mvv387"); // false


// 2. Write a regular expression to check if a string is a valid hex color:

// javascript
var r = #([0-9a-fA-F]{6})|#([0-9a-fA-F]{3})\b
r.test("#abc"); // true
r.test("#f00"); // true
r.test("#BADA55"); // true
r.test("#C0FFEE"); // true
r.test("#gac"); // false
r.test("#f005"); // false


// 3. Write a regular expression to check if a string is a valid date:

// javascript
var r = (0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[0-2])[-/.](19|20)\d\d
r.test("12/12/2012"); // true
r.test("24/08/1982"); // true
r.test("99/11/2019"); // false
r.test("hello"); // false
