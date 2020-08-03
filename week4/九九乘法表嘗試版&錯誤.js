
/*
要能印出
1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
依序下去直到 9*9 = 81
，那看可不可以先簡化題目來解
先做到印出 1*1 到 1*9
*/
/*
let n = 9
for (let i=1; i<=n; i++) {
    let s = ""
    printFormula(i, n)
}

function printFormula(str, n) {
    let result = 1 * str
    let s = "1*i = result" 
    console.log(s)
}


let a = 1 * 2
let b = 1 * 3
console.log(a, b)

第一圈 i = 1 公式是 1 * i ，然後印出 1 * i
*/

/*
let n = 9
for (let i=1; i<=n; i++) {
    let form = 1 * i
    console.log(str "=", form)
}

function string(i) {
    for (let i=1; i<=n; i++) {
        let str = "1*i"
    }
}
*/