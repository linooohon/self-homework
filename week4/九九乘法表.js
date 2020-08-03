// 第一種解法
function printIt(k) {
  for (let i=1; i<=9; i++) {
    console.log(k + "*" + i + "=" + k * i)
  }
}
for (let k=1; k<=9; k++) {
    printIt(k)
}

// 第二種解法：雙層迴圈，更簡潔
    for (let k=1; k<=9; k++) {
      for (let i=1; i<=9; i++) {
        console.log(k + "*" + i + "=" + k * i)
      }
    }
