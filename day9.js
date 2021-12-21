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
//找出最低點
let low = [];
let part1 = [];
count1 = 0;
for (let i = 1; i < wholeArr.length - 1; i++) {
  wholeArr[i] = Array.from(wholeArr[i]);
  for (let y = 1; y < wholeArr[0].length - 1; y++) {
    let now = parseInt(wholeArr[i][y]);
    let up = parseInt(wholeArr[i - 1][y]);
    let down = parseInt(wholeArr[i + 1][y]);
    let right = parseInt(wholeArr[i][y + 1]);
    let left = parseInt(wholeArr[i][y - 1]);
    if (now < up && now < down && now < right && now < left) {
      low.push(now);
      part1.push(now + 1);
    };
  };
};
console.log("part1:", part1.reduce((a, b) => a + b, 0));
let fromAllArr = [];
for (let i = 0; i < AllArr.length; i++) {
  fromAllArr.push(Array.from(AllArr[i]));
};
for (let i = 0; i < fromAllArr.length; i++) {
  // console.log(fromAllArr[i])
  let long = fromAllArr[i].length;
  for (let y = 0; y < long; y++) {
    fromAllArr[i][y] === "9" ?
      fromAllArr[i][y] = 1 :
      fromAllArr[i][y] = 0;

  }

}

console.log(fromAllArr)
