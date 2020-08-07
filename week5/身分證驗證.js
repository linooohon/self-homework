// 判斷身分證字號是否合法
function isValidTWId(str) {
    if (str === 'Y10000001') return true //蔣中正的身分證字號為 true
    if (str.length !== 10) return false  //必須要是 10 位
    if (!(str[0] >= 'A' && str[0] <= 'Z')) return false // 第一個字必須要是大寫英文字母，否則 false

    let n = alphaToNumber(str[0])
    let n1 = Math.floor(n / 10)
    let n2 = n % 10

    let sum = n1*1 + n2*9
    // i: 1~8
    for(let i=1; i<str.length - 1; i++) {
        sum += str[i] * (9 - i)
    }
    sum += Number(str[9])
    return sum % 10 === 0
}


function alphaToNumber(s) {
    let mapping = {
        A: 10, B: 11, C: 12, D: 13, E: 14,
        F: 15, G: 16, H: 17, I: 34, J: 18,
        K: 19, L: 20, M: 21, N: 22, O: 35,
        P: 23, Q: 24, R: 25, S: 26, T: 27,
        U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    }

    return mapping[s]
}

console.log(isValidTWId('M140051653'))
console.log(isValidTWId('M140051654'))
console.log(isValidTWId('A123456789'))
console.log(isValidTWId('345'))


/* 
這題結束，但最後還要再討論 edge case
像是 console.log(isValidTWId('A1234')) 數字不足、特例、第一個字要大寫英文、其他要都是數字
在最前面補充 if 的情況
*/