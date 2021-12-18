// part 1
let text = document.getElementById('day7').innerHTML;
let lines = text.split(",").map(Number);
let step1 = [];
for (let i = 0; i < lines.length; i++) {
  let temp = [];
  let plus = 0;
  for (let line of lines) {
    temp.push(Math.abs(line -= i));
  };
  plus = temp.reduce((a, b) => a + b, 0);
  step1.push(plus);
  temp = [];
};
console.log("part1:", Math.min(...step1))
// part 2
let step2 = 0
let temp2 = [];
let fuel = []
for (let z = 1; z <= lines.length; z++) {
  for (let line of lines) {
    temp2.push(Math.abs(line -= z));
  };
  for (let i = 0; i < lines.length; i++) {
    for (let y = 0; y < temp2[i] + 1; y++) {
      step2 += y;
    };
  };
  fuel.push(step2)
  step2 = 0
  temp2 = [];
}
console.log("part1:", Math.min(...fuel))