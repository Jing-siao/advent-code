let textArr = document.getElementById('day2').innerHTML.split(" ");
let forwardSum = 0;
let downSum = 0;
let allSum = 0;

//------------------
for (let i = 0; i < textArr.length; i += 2) {
  textArr[i] === "forward" ?
    (forwardSum += parseInt(textArr[i + 1]), allSum += downSum * parseInt(textArr[i + 1])) :
    textArr[i] === "down" ?
      (downSum += parseInt(textArr[i + 1])) :
      (downSum -= parseInt(textArr[i + 1]));
};

console.log("part 1:", forwardSum * downSum);
console.log("part 2:", allSum * forwardSum);
