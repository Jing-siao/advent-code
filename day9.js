// part 1
let text = document.getElementById('day9').innerHTML;
// n代表换行，\r代表回车，可以加个\s代表空格
let AllArr = text.split(/[(\r\n\s)]+/);
let long = AllArr[0].length;
let outer = '';
//創一個9陣列
for (let i = 0; i < long + 2; i++) {
  outer += "9";
};
// 前後都加9
let wholeArr = [];
for (let i = 0; i < AllArr.length; i++) {
  wholeArr.push(`9${AllArr[i]}9`)
};
// 上下包9
wholeArr.push(outer);
wholeArr.unshift(outer);
let fromAllArr = wholeArr;
//找出最低點
let low = [];
let part1 = [];
count1 = 0;
for (let i = 1; i < wholeArr.length - 1; i++) {
  wholeArr[i] = Array.from(wholeArr[i]);
  fromAllArr[i] = Array.from(fromAllArr[i]);
  for (let y = 1; y < wholeArr[0].length - 1; y++) {
    let now = parseInt(wholeArr[i][y]);
    let up = parseInt(wholeArr[i - 1][y]);
    let down = parseInt(wholeArr[i + 1][y]);
    let right = parseInt(wholeArr[i][y + 1]);
    let left = parseInt(wholeArr[i][y - 1]);
    if (now < up && now < down && now < right && now < left) {
      part1.push(now + 1);
    }
  };
};
console.log("part1:", part1.reduce((a, b) => a + b, 0));


// for (let i = 0; i < fromAllArr.length; i++) {
//   // console.log(fromAllArr[i])
//   let long = fromAllArr[i].length;
//   for (let y = 0; y < long; y++) {
//     fromAllArr[i][y] === "9" ?
//       fromAllArr[i][y] = 1 :
//       fromAllArr[i][y] = 0;
//   }
// };

// let counts = [];
// for (let i = 1; i < fromAllArr.length - 1; i++) {
//   let length = fromAllArr[i].length;
//   for (let y = 1; y < length - 1; y++) {
//     let now = fromAllArr[i][y];
//     let up = fromAllArr[i - 1][y];
//     let down = fromAllArr[i + 1][y];
//     let right = fromAllArr[i][y + 1];
//     let left = fromAllArr[i][y - 1];
//     let count = 1;
//     if (now === 0) {
//       now = 1;
//       if (up === 0) {
//         count += 1;
//         up = 1;
//       };
//       if (down === 0) {
//         count += 1;
//         down = 1;
//       };
//       if (right === 0) {
//         count += 1;
//         right = 1;
//       };
//       if (left === 0) {
//         count += 1;
//         left = 1;
//       };
//       counts.push(count)
//     };
//   }
// }

console.log(low, fromAllArr)
