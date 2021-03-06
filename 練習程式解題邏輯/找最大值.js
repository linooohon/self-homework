/*
1. 數字範圍 1 - n
2. 給第一個抽出的數字當作第一數字
3. 抽數字
4. 如果抽出第二個數字，大於原本的第一數字，則那數字當成新第一數字，並繼續抽數字
5. 第三步驟 false 的話，繼續抽數字
6. 直到全部抽完
7. 印出第一數字，此第一數字就是最大值
*/

const { finished } = require("stream")

/*
1. number = 1 - n
2. firstnumber = maxnumber
3. pick number
4. if secondnumber > maxnumber, then secondnumber = maxnumber, and back to step3
5. if else maxnumber the same, back to step3
6. all finished then
7. print maxnumber
*/

correct pseudo code:

let max = arr[0]            2
for (i from 0 to n-1) do    1.3
  if (arr[i] > max) do      4
    max = arr[i]            4
  end if                    4.5 finished
end for                     6
print max                   7



js code:

let max = arr[0]
for (let i=0; i<arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max)