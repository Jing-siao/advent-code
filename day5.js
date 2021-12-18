// part 1
let text = document.getElementById('day5').innerHTML;
let allArr = text.split(" ");
let twoAllArr = [];
let filterArr = [];
let arr = [];
let count1 = 0;
let count2 = 0;
//去除->符號
const toRemove1 = "-&gt;";
const toRemove2 = ",";
allArr = allArr.filter((item) => {
  return item !== toRemove1
});
allArr.forEach((item) => {
  let one = item.split(',');
  let obj = {
    x: parseInt(one[0]),
    y: parseInt(one[1])
  }
  arr.push(obj);
})
//2個一組
for (let i = 0; i < arr.length; i += 2) {
  twoAllArr.push(arr.slice(i, i + 2));
};
//判斷直線跟橫線與對角線
let line = [];
let lineAddCross = [];
for (let i = 0; i < twoAllArr.length; i++) {
  let x1 = twoAllArr[i][0].x;
  let x2 = twoAllArr[i][1].x;
  let y1 = twoAllArr[i][0].y;
  let y2 = twoAllArr[i][1].y;
  if (x1 === x2 || y1 === y2) {
    line.push(twoAllArr[i]);
  } else {
    lineAddCross.push(twoAllArr[i]);
  };
};
//座標點
let originPoint = [];
for (let i = 0; i < 1000; i++) {
  for (let y = 0; y < 1000; y++) {
    let obj = {
      x: i,
      y: y,
      mark: 0
    }
    originPoint.push(obj);
  }
};
function pointsY(min, max, fixed) {
  for (let k = min; k <= max; k++) {
    let obj = {
      x: fixed,
      y: k
    };
    singlePoint.push(obj);
  };
};
function pointsX(min, max, fixed) {
  for (let k = min; k <= max; k++) {
    let obj = {
      x: k,
      y: fixed
    };
    singlePoint.push(obj);
  };
};
//所有的點
let singlePoint = [];
for (let i = 0; i < line.length; i++) {
  let y1 = line[i][0].y;
  let y2 = line[i][1].y;
  let x1 = line[i][0].x;
  let x2 = line[i][1].x;
  let moreY = y1 - y2 > 0;
  let moreX = x1 - x2 > 0;
  if (x1 === x2) {
    moreY ?
      pointsY(y2, y1, x1) :
      pointsY(y1, y2, x1);
  } else {
    moreX ?
      pointsX(x2, x1, y1) :
      pointsX(x1, x2, y1);
  };
};
//比對重複物件 mark加1
function marked(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < originPoint.length; y++) {
      let crossX = (arr[i].x === originPoint[y].x);
      let crossY = (arr[i].y === originPoint[y].y);
      if (crossX && crossY) {
        originPoint[y].mark += 1;
      }
    }
  };
};
//超過1個交會點有幾個
function counts(count) {
  for (let i = 0; i < originPoint.length; i++) {
    if (originPoint[i].mark > 1) {
      count += 1
    }
  }
};
marked(singlePoint);
counts(count1);

console.log("part1:", count1);
// part 2
let test = []
for (let i = 0; i <= 2; i++) {
  let obj = {
    x: 5 - i,
    y: 6 + i
  }
  test.push(obj)
}
//斜線所有的點
// Math.abs
let slashSinglePoint = [];
for (let i = 0; i < lineAddCross.length; i++) {
  let y1 = lineAddCross[i][0].y;
  let y2 = lineAddCross[i][1].y;
  let x1 = lineAddCross[i][0].x;
  let x2 = lineAddCross[i][1].x;
  let length = Math.abs(x1 - x2);
  switch (true) {
    case (x1 > x2 && y1 > y2):
      for (let i = 0; i <= length; i++) {
        let obj = {
          x: x1 - i,
          y: y1 - i
        }
        slashSinglePoint.push(obj);
      }
      break;
    case (x1 > x2 && y1 < y2):
      for (let i = 0; i <= length; i++) {
        let obj = {
          x: x1 - i,
          y: y1 + i
        }
        slashSinglePoint.push(obj);
      }
      break;
    case (x1 < x2 && y1 < y2):
      for (let i = 0; i <= length; i++) {
        let obj = {
          x: x1 + i,
          y: y1 + i
        }
        slashSinglePoint.push(obj);
      }
      break;
    case (x1 < x2 && y1 > y2):
      for (let i = 0; i <= length; i++) {
        let obj = {
          x: x1 + i,
          y: y1 - i
        }
        slashSinglePoint.push(obj);
      }
      break;
  };
};

marked(slashSinglePoint);
counts(count2);

console.log("part2:", count2);

