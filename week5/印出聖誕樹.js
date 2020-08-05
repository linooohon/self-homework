/* 
1. 星星，第 n 層，有 2*n - 1 個星星
2. 星星的空格，每一層的空格為，給得層數減掉每一層的層數，
假設10層，意思是 第一層會有 10 - 1 ，9個空格，第二層 10 - 2 ， 8個空格，也就是 n - i 的意思
3. 聖誕樹樹幹，會是在給得層數 + 1 層開始出現，然後給 層數 - 1 個，每行一個
4. 聖誕樹樹幹的空格，為 n - 1 個，第二層一個空格，第三層兩個空格
*/


function solve(lines) {
  let n = Number(lines[0])
  for(let i=1; i<=n; i++) {
    printTree(i, n)
  }
  for(let i=1; i<=n-1; i++) {
        printBottom(n)
  }
}

solve(['5'])

function printTree(i, n) {
    console.log(
        repeat(' ', n - i) +
        repeat('*', 2*i - 1)
    )
}

function printBottom(n) {
    console.log(repeat(' ', n - 1) + '|')
}


function repeat(str, n) {
    let result = ''
    for(let i=1; i<=n; i++) {
        result += str
    }
    return result
}




// solve(['5'])，會印出 5 排星星，4 條樹幹的聖誕樹