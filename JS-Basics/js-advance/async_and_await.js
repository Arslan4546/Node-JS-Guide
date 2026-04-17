//. Async/Await (Best modern approach)
async function getData() {
  try {
    await loginUser(user);
    await getProfile(user);
    await getPosts(user);
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}
// 💡 Flutter se relate:
// async/await JS ≈ Dart ka async/await
// 🧠 Node me real use:


app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✔️ Database calls always async hoti hain



// ye code **Express.js ka ek basic route hai jo database se users nikal ke client ko bhejta hai. Chalo isko bilkul simple language mein tod ke samajhte hain 👇

// 🔹 Sab se pehle: /users kya hai?

// 👉 /users ko route / endpoint / URL path kehte hain

// Matlab:

// Jab koi browser ya app ye URL hit kare:
// http://localhost:3000/users

// 👉 tab ye wala code run hoga

// 🔹 Code Breakdown (line by line)
// app.get('/users', async (req, res) => {
// 👉 app.get(...)
// GET request handle kar raha hai (data lene ke liye use hoti hai)
// 👉 /users
// Ye URL path hai (endpoint)
// Iska matlab: "mujhe users ka data chahiye"
// 🔹 Ab andar kya ho raha hai:
// const users = await User.find();

// 👉 Yahan:

// User ek model hai (usually MongoDB + Mongoose)
// find() ka matlab: database se saare users nikaalo

// 👉 await ka matlab:

// ruk jao jab tak data aa nahi jata
// res.json(users);

// 👉 Server client ko response bhej raha hai:

// JSON format mein users ka data
// 🔥 Complete Flow (Step-by-step)

// Client request bhejta hai:

// GET /users
// Express route match karta hai:
// 👉 /users
// Database se data fetch hota hai:
// 👉 User.find()
// Server response bhejta hai:
// 👉 res.json(users)