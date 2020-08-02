/* 
解題邏輯：
先把小問題解決，再解決大問題
首先寫出可以每行都印出星星的程式
*/

let N = 10
for (let i=1; i<=N; i++) {
    console.log("*")
}


/*
再來，要去做到給到哪個數字，那一行就會印出那個數字的星星，而不是每行印出的星星都一樣
所以要把 console.log("*") 置換掉，用函式去解決這個問題，所以設置 printStar
*/

let N = 10
for (let i=1; i<=N; i++) {
    printStar(i)
}

function printStar(n) {
    let s = ''
    for (let i=1; i<=n; i++) {
        s += '*'
    }
    console.log(s)
}



