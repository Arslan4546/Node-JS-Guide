// 2. Callback Hell vs Promises
// ❌ Callback Hell (old style Node)
loginUser(user, function () {
  getProfile(user, function () {
    getPosts(user, function () {
      console.log("Done");
    });
  });
});

// 👉 Yeh pyramid ban jata hai → unreadable + buggy

// // ✅ Promises (modern solution)
loginUser(user)
  .then(() => getProfile(user))
  .then(() => getPosts(user))
  .then(() => console.log("Done"))
  .catch(err => console.log(err));

//✔️ Clean + readable