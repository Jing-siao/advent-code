// part 1
let textArr = document.getElementById('day3').innerHTML.split(" ");
let num = ["", "", "", "", "", "", "", "", "", "", "", ""];
let gamma = "";
let epsilon = "";
for (let i = 0; i < textArr.length; i++) {
  for (let y = 0; y < 12; y++) {
    if (textArr[i][y] === "0") {
      num[y] += textArr[i][y];
    };
  };
};
for (let i = 0; i < num.length; i++) {
  num[i].length > 500 ?
    (gamma += 0, epsilon += 1) :
    (gamma += 1, epsilon += 0);
}
console.log('part 1:', parseInt(gamma, 2) * parseInt(epsilon, 2))
// part 2
let oxygen = [...textArr];
let co2 = [...textArr];
let arr0 = [];
let arr1 = [];
function clear() {
  arr0 = [];
  arr1 = [];
};
let y = 0;
while (oxygen.length > 1) {
  for (let i = 0; i < oxygen.length; i++) {
    oxygen[i][y] === "1" ?
      arr1.push(oxygen[i]) :
      arr0.push(oxygen[i]);
  };
  arr1.length >= arr0.length ?
    oxygen = arr1 :
    oxygen = arr0;
  clear();
  y++;
}

let z = 0;
while (co2.length > 1) {
  for (let i = 0; i < co2.length; i++) {
    co2[i][z] === "1" ?
      arr1.push(co2[i]) :
      arr0.push(co2[i]);
  };
  arr1.length < arr0.length ?
    co2 = arr1 :
    co2 = arr0;
  clear();
  z++;
}
console.log('part 2:', parseInt(oxygen, 2) * parseInt(co2, 2))
