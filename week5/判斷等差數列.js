function isValid(arr) {
    if (arr.length <= 1) return true //把 edge case 考慮進去，也就是空陣列與一個數字的陣列
    let d = arr[1] - arr[0]
    for(let i=1; i<arr.length; i++) {
        if (arr[i] - arr[i-1] !== d) {
            return false
        }
    }
    return true
}
console.log(isValid([1, 3, 5, 7, 9]))
console.log(isValid([0, 0, 0, 0]))
console.log(isValid([1, 3, 4, 7,]))
console.log(isValid([]))
console.log(isValid([8]))