//---> Async JavaScript (MOST IMPORTANT 🔥)

// 👉 JavaScript single-threaded hai
// 👉 Lekin async se multiple kaam handle karta hai

// 🔹 1. Callback (Old Way)
setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);
//👉 Problem: Callback hell 😵



//🔹 2. Promises (Better Way)
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then(res => console.log(res));


//🔹 3. async/await (Best Way ⭐)
async function getData() {
  let res = await fetch("api_url");
  let data = await res.json();
  console.log(data);
}


//👉 Clean & readable
//👉 Industry standard

// 🔄 How Async Actually Works (Simple)

// 👉 JS engine:

// Call stack
// Web APIs
// Callback queue
// Event loop

// 👉 Flow:

// Async task → Web API
// Complete → Queue
// Event loop → Execute