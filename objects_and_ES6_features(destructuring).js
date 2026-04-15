//--> Objects (Real World Data)
// 🔹 Example

let user = {
  name: "Ali",
  age: 25,
  isLogin: true
};

//🔹 Access
console.log(user.name);
console.log(user.age);


//🔥 Nested Object
let user = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
};
console.log(user.address.city);


//-->  ⚡ 6. ES6 Features (Game Changer)
// 🔹 Destructuring
let user = { name: "Ali", age: 25 };
let { name, age } = user;
//👉 Direct variables mil jate hain



//🔹 Spread Operator
let arr1 = [1,2];
let arr2 = [...arr1, 3,4];

//👉 Copy + merge easy ho jata hai

//  🔹 Rest Operator
function sum(...numbers) {
  return numbers.reduce((a,b) => a+b);
}