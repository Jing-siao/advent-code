// part 1
let text = document.getElementById('day7').innerHTML;
let lines = text.split(",").map(Number);
let plus = 0;
// for (let i = 0; i < lines.length; i++) {
//   let test = [];

// }
for (let line of lines) {
  test.push(Math.abs(line -= i))
};
plus = test.reduce((a, b) => a + b, 0);


console.log(plus)
