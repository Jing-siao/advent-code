// part 1
let text = document.getElementById('day9').innerHTML;
// n代表换行，\r代表回车，可以加个\s代表空格
let lines = text.split(/[(\r\n\s)]+/);
function floodfill(i, j, map) {
  if (map[i][j] === 1) return 0; // check node hasn't been visited
  map[i][j] = 1; // mark node as visited

  // count neighbors
  let size = 1;

  if (i - 1 >= 0) {
    size += floodfill(i - 1, j, map);
  }
  if (i + 1 < map.length) {
    size += floodfill(i + 1, j, map);
  }
  if (j - 1 >= 0) {
    size += floodfill(i, j - 1, map);
  }
  if (j + 1 < map[i].length) {
    size += floodfill(i, j + 1, map);
  }
  // console.log(size)
  return size;
}

function part2() {
  const map = Array(lines.length)
    .fill(0)
    .map((x, i) =>
      Array(lines[0].length)
        .fill(0)
        .map((x, j) => (lines[i][j] === "9" ? 1 : 0))
    );
  console.log(map)
  let bassins = [];

  console.log(map.map((x) => x.join``).join`\n`);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const size = floodfill(i, j, map);
      console.log(size)
      if (size > 0) {
        console.log("");
        console.log(map.map((x) => x.join``).join`\n`);
        bassins.push(size);
      }
    }
  }
  bassins.sort((a, b) => b - a);
  console.log(bassins)
  console.log(bassins[0] * bassins[1] * bassins[2]);
}

part2();

