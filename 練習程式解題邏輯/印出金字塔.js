let n = 10
for (let i=1; i<=n; i++) {
    printLayer(i, n)
}
function printLayer(i, n) {
    // 空白(空格) + 星星
    let str = repeat(' ', n - i) + repeat('*', 2*i - 1)
    console.log(str)
}

function repeat(str, n) {
    let s = ''
    for (let i=1; i<=n; i++) {
        s += str
    }
    return s
}

/*  
1. 先找出規律
2. 發現是 1, 3, 5, 7的往下跑，所以會是 設第 i 層，第一層就是 i = 1，共 n 層，每層的星星為 2*i 
3. 因為他是呈現金字塔或是說是三角形的形式，所以可以判斷為印出字串，裡面有添加空字串，也就是空格
4. 所以，再找出空格的規律，發現規律是每一層的空格為 n - i，例如假設共 10 層，則第一層的空格就是 10 - 1 = 9
5. 所以概念是有規律的印就是關於迴圈，第一步先設 for 迴圈， 包含 i, n ，裡面運作要設的 function，也就是 printLayer
6. 第二步，去想它是怎麼印的，想法是把它分成印出空格 + 印出星星
7. 第三步，所以想好後設定 funtion printLayer，要印出字串所以設一個字串變數，最後要 console.log 印出
8. 第四步，現在已經想好他每行一定會照著字串變數設定的函式公式印出來，現在就是要設定這個函式讓他可以跑完全部
9. 第五步，設定 function repeat，參數就是字串還有 n ，然後設 s 為一個空字串，設置 for 迴圈，讓它可以依序印出空格與星星
10. 完成，給 n 等於多少就可以跑。
*/