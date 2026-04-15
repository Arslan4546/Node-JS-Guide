//--> Functions (Core Logic)


//🔹 Normal Function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Ali")); // Hello Ali


//🔹 Arrow Function ⭐
const greet = (name) => {
  return "Hello " + name;
};


//👉 Short form:
const greet = name => "Hello " + name;

//🔥 Difference (Important)
// Arrow function:
// this inherit karti hai
// Short & clean hoti hai


//📦 4. Arrays (Data List)
//🔹 Example
let numbers = [1, 2, 3, 4];


//🔹 Important Methods
numbers.push(5);     // add
numbers.pop();       // remove last
numbers.map(x => x*2); // transform
numbers.filter(x => x > 2); // filter


//🔥 Real Example
let users = ["Ali", "Ahmed", "Sara"];
let result = users.map(user => user.toUpperCase());
console.log(result); // ["ALI", "AHMED", "SARA"]