// part 1
let text = document.getElementById('day6').innerHTML;
let originArr = text.split(",");
let count = 0;
function part1() {
  //編號0-8的魚有0隻
  const queue = Array(9).fill(0);
  for (const fish of originArr) {
    //跑迴圈第幾個編號+1
    queue[fish]++;
  }
  for (let i = 0; i < 80; i++) {
    //shift()不僅會移除第一個陣列值，同時會將移除得陣列值進行回傳
    const currentFishes = queue.shift();
    //第一個值是編號0有幾隻，刪掉後編成最一個編號8有幾隻
    queue.push(currentFishes);
    //編號0的換變成編號6
    queue[6] += currentFishes;
  }
  console.log("part1:", queue.reduce((a, b) => a + b, 0));
}

part1();
function part2() {
  //編號0-8的魚有0隻
  const queue = Array(9).fill(0);
  for (const fish of originArr) {
    //跑迴圈第幾個編號+1
    queue[fish]++;
  }
  for (let i = 0; i < 256; i++) {
    //shift()不僅會移除第一個陣列值，同時會將移除得陣列值進行回傳
    const currentFishes = queue.shift();
    //第一個值是編號0有幾隻，刪掉後編成最一個編號8有幾隻
    queue.push(currentFishes);
    //編號0的換變成編號6
    queue[6] += currentFishes;
  }
  console.log("part2:", queue.reduce((a, b) => a + b, 0));
}

part2();


