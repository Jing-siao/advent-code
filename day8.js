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
for (let i = 0; i < 10; i++) {
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
  if (length === 2 || length === 3 || length === 4 || length === 7) {
    partCount += 1;
  };
  forArr(4, 1);
  forArr(10, 0);
};
console.log('part1:', partCount)
// part 2
console.log(marked)
for (let i = 0; i < AllArr.length; i++) {

  for (let y = 0; y < 10; y++) {
    let length = arr[i][0][y].length;
    let text = arr[i][0][y];
    if (length === 6) {
      if (text.includes(marked[i].num4[0]) && text.includes(marked[i].num4[1]) && text.includes(marked[i].num4[2]) && text.includes(marked[i].num4[3])) {
        console.log(text, true)
      } else {
        console.log(text, false)
      }
    }
  };


};


console.log(arr)
// let a = 'abcde';
// let b = Array.from(a);
// console.log(b);

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
