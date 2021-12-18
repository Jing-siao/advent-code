// part 1
let text = document.getElementById('day4').innerHTML;
let all = text.slice(text.indexOf(' ') + 1).split(" ");
let bingoNum = text.split(" ")[0].split(",").map(Number);
let boards = [];
let h5 = [];
let marked = [];
let straightBoards = [];
let s5 = [];


all.forEach((item) => {
  boards.push({
    num: parseInt(item),
    mark: 0
  })
});
// 塞bingo順序
boards.map((bingo) => {
  let index = bingoNum.findIndex(number => bingo.num === number);
  bingo.mark = index
});
//5個一組
function group(arr, newArr) {
  for (let i = 0; i < arr.length; i += 5) {
    newArr.push(arr.slice(i, i + 5));
  }
};
//找max
function maximum(arr, filterArr) {
  arr.forEach((el) => {
    let max;
    let markHArr = el.map(x => x.mark);
    max = Math.max(...markHArr);
    let obj = {
      // ...el,
      max
    }
    filterArr.push(obj)
  });
};
//橫的5個一組
group(boards, h5);
//直的5個一組
for (let i = 0; i < h5.length; i += 5) {
  for (let k = 0; k < 5; k++) {
    for (let j = 0; j < 5; j++) {
      straightBoards.push(h5[i + j][k]);
    }
  }
}
group(straightBoards, s5);
//找每一列的最大值
let filterHArr = [];
maximum(h5, filterHArr);
//找每一行的最大值
let filterSArr = []
maximum(s5, filterSArr);
let min0 = [];  //100個人中，每個人在第幾次叫號時會賓果

for (let i = 0; i < filterHArr.length; i += 5) {
  var min1 = 100;
  for (let j = 0; j < 5; j++) {
    if (min1 > filterHArr[i + j].max) {
      min1 = filterHArr[i + j].max;
    };
    if (min1 > filterSArr[i + j].max) {
      min1 = filterSArr[i + j].max;
    };
  };
  min0.push(min1);
};
//抓第幾盤賓果
//Math.min(...min0)叫到第幾次賓果
let min = Math.min(...min0);
let indexWin = min0.indexOf(min) + 1;
//抓那一盤所有數字 slice(begin, end不含end）
let bingoBoardWin = boards.slice(25 * (indexWin - 1), 25 * indexWin);
let finalArrWin = bingoNum.slice(0, min + 1);
let finalWinNum = finalArrWin[finalArrWin.length - 1];//喊到這個號碼賓果
//去除被叫的 以外的總和
let arrOutWin = []
let arrOutLose = []
function SumData(oldArr, arr, witch) {
  oldArr.map((bingo) => {
    if (bingo.mark > witch) {
      arr.push(bingo.num)
    }
  });
  return arr.reduce((a, b) => a + b);
};
console.log("part1:", SumData(bingoBoardWin, arrOutWin, min) * finalWinNum);
// part 2
let max = Math.max(...min0);//最輸的叫到第幾次賓果
let indexLose = min0.indexOf(max) + 1;
let bingoBoardLose = boards.slice(25 * (indexLose - 1), 25 * indexLose);
let finalArrLose = bingoNum.slice(0, max + 1);
let finalLoseNum = finalArrLose[finalArrLose.length - 1];//喊到這個號碼賓果
console.log("part2:", SumData(bingoBoardLose, arrOutLose, max) * finalLoseNum);

