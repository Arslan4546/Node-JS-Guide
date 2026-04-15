//1. Variables (let, const, var)
//🔹 Syntax
let name = "Arslan";
const age = 22;
var city = "Lahore";
console.log(name); // Arslan
console.log(age);
console.log(city);


//🔹 Difference (VERY IMPORTANT)
// Keyword	Change ho sakta?	Scope	Use
// var	✅	Function	Avoid
// let	✅	Block	Use
// const	❌	Block	Preferred



//🔥 Example (Scope)
if (true) {
  let a = 10;
  var b = 20;
}

console.log(b); // ✅ works
console.log(a); // ❌ error

// 👉 let block ke andar hi accessible hota hai
// 👉 var bahar bhi leak ho jata hai