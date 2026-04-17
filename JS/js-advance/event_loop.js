// Event Loop (Node ka heart)
// 💡 Simple:

// Node single-threaded hai — lekin slow nahi hai kyun ke:

// Event Loop async tasks handle karta hai

//🔥 Example:
console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 0);

console.log("End");
// Output:
// Start
// End
// Async task

// 👉 Kyun?
// setTimeout async queue me chala gaya
// Event loop baad me run karta hai




// 🧠 Real Node example:
app.get('/', (req, res) => {
  fs.readFile('file.txt', (err, data) => {
    res.send(data);
  });
});

// ✔️ File read background me hota hai
// ✔️ Server block nahi hota