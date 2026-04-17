//Promises + Event Loop combo (REAL POWER)
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise




// 👉 Promises microtask queue me jati hain (high priority)

// 🧩 Real Backend Flow (ALL COMBINED)
app.get('/data', async (req, res) => {
  try {
    const data = await fetchData(); // async call
    res.json(data);
  } catch (e) {
    res.send("Error");
  }
});

// Yahan kya ho raha hai:
//  Request aayi
// Async DB/API call hui
// Event loop ne manage kiya
// Response send hua
//🎯 Final Understanding (Golden Points)

// ✔️ Closures → state hold karte hain (middleware, caching)
// ✔️ Callbacks → old style async
// ✔️ Promises → better chaining
// ✔️ Async/Await → clean code (industry standard)
// ✔️ Event Loop → Node ko fast banata hai