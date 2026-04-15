//-->  Variables (let, const, var)


//🔹 Syntax
let name = "Arslan";
const age = 22;
var city = "Lahore";
console.log(name); // Arslan
console.log(age); // 22
console.log(city); // Lahore


//🔹 Difference (VERY IMPORTANT)

// Keyword	     Change ho sakta?	      Scope	            Use

// var	               ✅	            Function	        Avoid
// let	               ✅	            Block	            Use
// const	             ❌	            Block	            Preferred



//🔥 Example (Scope)
if (true) {
  let a = 10;
  var b = 20;
}

console.log(b); // ✅ works
console.log(a); // ❌ error

// 👉 let block ke andar hi accessible hota hai
// 👉 var bahar bhi leak ho jata hai


//-->  Data Types (Core Understanding)


//🔹 Primitive Types

let name = "Ali";   // string
let age = 25;       // number
let isLogin = true; // boolean
let x = null;
let y; // undefined


//🔹 Reference Types

let user = { name: "Ali" }; // object
let arr = [1,2,3];          // array

// 👉 Difference:
// Primitive = copy hoti hai
// Reference = memory share hoti hai