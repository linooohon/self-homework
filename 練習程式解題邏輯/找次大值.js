let arr = [5, 8, 6]
let max = -Infinity
let max2 = -Infinity
for(let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
        max2 = max
        max = arr[i]
    }  else if (arr[i] > max2) {
       max2 = arr[i] 
    }
}
console.log(max, max2)

/*
1. 要找次大值的陣列
2. 把次大值和最大值初始化成一個很小的數字
3. 迴圈遍歷整個陣列，i 目前是 0
4. arr[0] 也就是 5 是不是大於 max ?
5. 是 原本的最大值會變成次大值，也就是 max2 = -Infinity，而 arr[0]變成最大，也就是 max = 5
6. 到下一圈迴圈，i = 1
7. arr[1]，也就是 8 ，是不是大於 max ?
8. 是， max2 變成 5 ， max 變成 8
9. 到下一圈迴圈，i = 2
10. arr[2] ，也就是 6 ，是不是大於 max ?
11. 否，所以進到 arr[2] 是不是大於 max2 ？
12. 是，所以 max 變成 6
13. 到下一圈迴圈， i = 3，超出範圍，結束
14. 印出 max 與 max2
*/ 