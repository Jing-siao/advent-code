// part 1
let text = document.getElementById('day10').innerHTML;
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

//創一個二為陣列長度為102x102，for第二部分使用
let newArr = new Array();
for (let i = 0; i < 102; i++) {
  newArr[i] = new Array();
  for (let j = 0; j < 102; j++) {
    newArr[i][j] = 0;
  };
};
//找出最低點
let low = [];
let part1 = [];
let count1 = 1;
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
      low.push(now);
      newArr[i][y] = count1;
      count1 += 1;
    };
    if (now === 9) {
      newArr[i][y] = 999;
    }
  };
};
console.log("part1:", part1.reduce((a, b) => a + b, 0));

//將最外圈改為999
for (let i = 0; i < 102; i++) {
  for (let j = 0; j < 102; j++) {
    newArr[0][j] = 999;
    newArr[101][j] = 999;
    newArr[i][0] = 999;
    newArr[i][101] = 999;
  };
};

//朝狀往外擴散最低點的數值
for (let k = 0; k < 100; k++) {// 做幾次巢狀往外擴
  for (let i = 1; i < 101; i++) {
    for (let j = 1; j < 101; j++) {
      let now = newArr[i][j];
      let up = newArr[i - 1][j];
      let down = newArr[i + 1][j];
      let right = newArr[i][j + 1];
      let left = newArr[i][j - 1];
      if (now < 999 && now > 0) {
        if (down < 999) newArr[i + 1][j] = now;
        if (up < 999) newArr[i - 1][j] = now;
        if (right < 999) newArr[i][j + 1] = now;
        if (left < 999) newArr[i][j - 1] = now;
      };
    };
  };
};
//先把二維陣列轉一維陣列 並去除999
let flatArr = newArr.flat();
flatArr = flatArr.filter((value) => {
  return value !== 999
});
//算每個數的總和
let count2 = 0;
let lowArr = [];
for (let i = 1; i < low.length + 1; i++) {
  for (let flat of flatArr) {
    if (flat === i) {
      count2 += 1
    }
  };
  lowArr.push(count2);
  count2 = 0;
};
//由大排到小
lowArr.sort((a, b) => b - a);

console.log("part2:", lowArr[0] * lowArr[1] * lowArr[2]);




