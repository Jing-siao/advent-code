// part 1
let textArr = document.getElementById('day1').innerHTML.split(" ");
let largerArr = [];
for (let i = 0; i < textArr.length - 1; i++) {
  if (textArr[i + 1] - textArr[i] > 0) {
    largerArr.push(textArr[i + 1]);
  };
};
console.log('part 1:', largerArr.length);
// part 2
let sumArr = [];
let largerArr2 = [];
for (let i = 0; i < textArr.length - 2; i++) {
  let sum = parseInt(textArr[i]) + parseInt(textArr[i + 1]) + parseInt(textArr[i + 2]);
  sumArr.push(sum);
};
for (i = 0; i < sumArr.length - 1; i++) {
  if (sumArr[i + 1] - sumArr[i] > 0) {
    largerArr2.push(sumArr[i + 1]);
  };

}
console.log('part 2:', largerArr2.length);
