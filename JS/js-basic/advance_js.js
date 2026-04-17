// Advanced Concepts (Must Know)
// 🔹 Closures

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

let fn = outer();
fn(); // 1
fn(); // 2
// 👉 Inner function parent ka data yaad rakhti hai




// 🔹 Hoisting
console.log(x);
var x = 10;
// 👉 Output: undefined (not error)



// 🔹 this Keyword
let obj = {
  name: "Ali",
  show() {
    console.log(this.name);
  }
};


// 👉 this current object ko refer karta hai