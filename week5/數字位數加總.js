
// 第一個解法，用數學除法、餘數的方法
function addDigits(n) {
    if (n < 0) {
        n = n * -1
    }
    let sum = 0
    while(n != 0) {
        sum += n % 10 
        n = Math.floor(n / 10)
    }
    return sum
}



// 第二個解法，換成字串
function addDigits(n) {
    if (n < 0) {
        n = n * -1
    } 
    n = n + ''
    let sum = 0
    for(let i=0; i<n.length; i++) {
        sum += Number(n[i])
    }
    return sum
}



console.log(addDigits(1)) // 1
console.log(addDigits(0)) // 0
console.log(addDigits(10)) // 1
console.log(addDigits(99)) // 18 
console.log(addDigits(3434)) // 14
console.log(addDigits(55667788)) // 52
console.log(addDigits(-55)) // 10