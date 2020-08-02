let n = 12
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (let i=0; i<n; i++) {
    if (isPrime(arr[i])) {
        console.log("Prime")
    } else {
        console.log("Composite")
    }
}
function isPrime(n) {
    if (n === 1) return false
    for (let i=2; i<n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}