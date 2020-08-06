// Q:  求 5 到 200 之間的水仙花數

/* A: 底下開始解，
1. 先寫 function digitsCount 判斷幾位數
2. 再寫 function isNarcissistic 判斷是否為水仙花數，試著 console.log(isNarcissistic(代數字))判斷程式對不對
3. 最後寫 function solve 判斷 題目之間的數有哪些是 true，就可以印出，完成題目
if (isNarcissistic(i)) {
          console.log(i)
      }
*/

// 拿到所有資料
function solve(lines) {
// 5 200 => ['5', '200']
  let temp = lines[0].split(' ')
  let n = Number(temp[0])
  let m = Number(temp[1])
  for(let i=n; i<=m; i++) {
      if (isNarcissistic(i)) {
          console.log(i)
      }
  }
}

solve(['5 200'])

// 回傳數字幾位數
function digitsCount(n) {
    if (n === 0) return 1
    let result = 0
    while(n != 0) {
        n = Math.floor(n / 10)
        result++
    }
    return result
}

function isNarcissistic(n) {
    // 幾位數
    let m = n
    let digits = digitsCount(m)
    let sum = 0
    //console.log('n:', n)  印出看過程
    //console.log('digits:', digits) 印出看過程
    while(m != 0) {
        let num = m % 10
        //console.log('m:', m, 'num:', num) 印出看過程
        sum += num**digits // 可改成 sum += Math.pow(num, digits)
        m = Math.floor(m / 10)
    }
    //console.log('sum:', sum) 印出看過程

    // 判斷 sum 是不是等於 n
    // 可簡化成 return sum === n
    if (sum === n) {
        return true
    }   else {
        return false
    }
}

// console.log(isNarcissistic(1634)) 
// 確認原本的邏輯對不對，確認可以正確的跑出 true 和 false 然後最後再來寫 function solve




// function isNarcissistic 的替代方式，第二種解法，換成字串就可以判斷位數
/*
function isNstr(n) {
    let str = n + ''
    let digits = str.length
    let sum = 0
    for(let i=0; i<str.length; i++) {
        sum += Number(str[i])**digits
    }
    return sum === n
}

function solve 最後改成
if (isNstr(i)) {
          console.log(i)
      }
*/