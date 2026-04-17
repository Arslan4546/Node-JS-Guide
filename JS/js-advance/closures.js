// 1. Closures (Backend me data hide karna)
// 💡 Simple idea:

// Closure ka matlab hai:

// Function apni outer scope ki variables ko yaad rakhta hai even after execution

//🔥 Example:
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
// 🧠 Node me kaha use hota hai?
// Private variables (like token, config)
// Middleware logic
// Caching






// 👉 Example (real backend style):

function rateLimiter() {
  let count = 0;

  return (req, res, next) => {
    count++;
    if (count > 5) return res.send("Limit exceeded");
    next();
  };
}

// ✔️ Har request me count yaad rehta hai → closure power




// Ye jo req, res, next hain — ye **Express.js middleware function ke core parameters hain. Tum jab backend banaoge Node.js pe (especially Express), ye 3 cheezen har request ke flow ko control karti hain.

// Chalo simple aur practical tareeqe se samajhte hain 👇

// 🔹 1. req (Request Object)

// 👉 Ye client ki taraf se aane wali request ka data hota hai

// Matlab:

// user ne kya bheja (data, params, headers, etc.)

// Example:

// req.body        // POST data
// req.params      // URL params
// req.query       // ?id=10
// req.headers     // headers info

// 💡 Real example:
// Agar user login kar raha hai:

// req.body.email
// req.body.password
// 🔹 2. res (Response Object)

// 👉 Ye server ka response bhejne ka tool hai

// Matlab:

// tum client ko kya wapas bhejna chahte ho

// Example:

// res.send("Hello")          // simple response
// res.json({ success: true }) // JSON response
// res.status(404).send("Not found")

// 💡 Tumhara code:

// return res.send("Limit exceeded");

// 👉 Yahan tum user ko bol rahe ho: "Bas bhai, limit cross ho gayi"

// 🔹 3. next (Next Function)

// 👉 Ye control ko aglay middleware ya route handler tak forward karta hai

// Express ka flow hota hai:
// 👉 middleware1 → middleware2 → route handler

// Agar tum next() call nahi karte:
// ❌ request wahi ruk jati hai

// Example:

// next(); // aagay jao
// 🔥 Tumhara Rate Limiter Example (Step-by-step)
// function rateLimiter() {
//   let count = 0;

//   return (req, res, next) => {
//     count++;

//     if (count > 5) {
//       return res.send("Limit exceeded");
//     }

//     next();
//   };
// }

// Kya ho raha hai:
// Har request pe count++
// Agar 5 se zyada ho gayi:
// 👉 response bhej do (block)
// warna:
// 👉 next() → agla middleware ya route chalega