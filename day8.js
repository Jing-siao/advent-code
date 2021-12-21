// part 1
let text = document.getElementById('day8').innerHTML;
// n代表换行，\r代表回车，可以加个\s代表空格
let AllArr = text.split(/[(\r\n)]+/);
let splitArr = [];

let partCount = 0;
for (let i = 0; i < AllArr.length; i++) {
  splitArr.push(AllArr[i].split(" | "));

};
let arr = [];
let arr2 = [];
//轉二維陣列
for (let i = 0; i < AllArr.length; i++) {
  let arr1 = [...[splitArr[i][0].split(" ")]];
  let arr2 = [...[splitArr[i][1].split(" ")]];
  arr.push([...arr1, ...arr2]);

};
let marked = [];
for (let i = 0; i < AllArr.length; i++) {
  let obj = {
    num0: "",
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
    num7: "",
    num8: "",
    num9: "",
  }
  marked.push(obj);
};
for (let i = 0; i < arr.length; i++) {
  //抓出1,4,7,8
  function forArr(arrLength, index) {
    for (let y = 0; y < arrLength; y++) {
      let length = arr[i][index][y].length;
      let text = arr[i][index][y];
      switch (length) {
        case 2:
          marked[i].num1 = Array.from(text);
          break;
        case 3:
          marked[i].num7 = Array.from(text);
          break;
        case 4:
          marked[i].num4 = Array.from(text);
          break;
        case 7:
          marked[i].num8 = Array.from(text);
          break;
      };
    };
  };
  //part1加總
  for (let y = 0; y < 4; y++) {
    let length = arr[i][1][y].length;
    if (length === 2 || length === 3 || length === 4 || length === 7) {
      partCount += 1;
    };
  }
  forArr(4, 1);
  forArr(10, 0);
};
console.log('part1:', partCount)
// part 2

for (var i = 0; i < AllArr.length; i++) {
  for (let y = 0; y < 10; y++) {
    let length = arr[i][0][y].length;
    let text = arr[i][0][y];
    let count1 = 0;
    let count4 = 0;
    let count6 = 0;
    for (let x = 0; x < 6; x++) {
      if (text.includes(marked[i].num6[x])) {
        count6 += 1;
      };
    };
    for (let x = 0; x < 4; x++) {
      if (text.includes(marked[i].num4[x])) {
        count4 += 1;
      };
    };
    for (let x = 0; x < 2; x++) {
      if (text.includes(marked[i].num1[x])) {
        count1 += 1;
      };
    };
    if (length === 6) {//9,0,6線段皆為6
      if (count4 === 4) {//9含4
        marked[i].num9 = Array.from(text);
      } else {
        count1 === 2 ?//0含1不含4
          marked[i].num0 = Array.from(text) :
          marked[i].num6 = Array.from(text);
      };
    };
    if (length === 5) {//2,3,5線段皆為5
      if (count1 === 2) {//3含1
        marked[i].num3 = Array.from(text);
      } else {
        count6 === 5 ?//5跟6差一個
          marked[i].num5 = Array.from(text) :
          marked[i].num2 = Array.from(text);
      };
    }
  };
};
let part2Arr = [];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  part2Arr.push(arr[i][1]);
  for (let k = 0; k < 4; k++) {
    let length = part2Arr[i][k].length;
    let text = part2Arr[i][k];
    let count1 = 0;
    let count4 = 0;
    let count6 = 0;
    for (let x = 0; x < 6; x++) {
      if (text.includes(marked[i].num6[x])) {
        count6 += 1;
      };
    };
    for (let x = 0; x < 4; x++) {
      if (text.includes(marked[i].num4[x])) {
        count4 += 1;
      };
    };
    for (let x = 0; x < 2; x++) {
      if (text.includes(marked[i].num1[x])) {
        count1 += 1;
      };
    };
    switch (length) {
      case 2:
        part2Arr[i][k] = 1;
        break;
      case 3:
        part2Arr[i][k] = 7;
        break;
      case 4:
        part2Arr[i][k] = 4;
        break;
      case 5:
        if (count1 === 2) {
          part2Arr[i][k] = 3;
        } else {
          count6 === 5 ?
            part2Arr[i][k] = 5 :
            part2Arr[i][k] = 2;
        }
        break;
      case 6:
        if (count4 === 4) {
          part2Arr[i][k] = 9
        } else {
          count1 === 2 ?
            part2Arr[i][k] = 0 :
            part2Arr[i][k] = 6;
        }
        break;
      case 7:
        part2Arr[i][k] = 8;
        break;

    };

  };
  newArr.push(parseInt(part2Arr[i].join('')))
};
console.log('part2:', newArr.reduce((a, b) => a + b, 0))
