//解法一：先看 ASCII code 是不是屬於小寫，是的話，再轉為大寫

let str = "Hi"
let ans = ''
for(let i=0; i<str.length; i++) {
    let code = str.charCodeAt(i)
    if (code >= 97 && code <= 122) {
      ans += String.fromCharCode(code - 32)
    } else {
      ans += str[i]
    }  
}
console.log(ans)

//解法二：直接比較是否為小寫，是的話，再轉為大寫

let str = "Hi"
let ans = ''
for(let i=0; i<str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      ans += String.fromCharCode(
        str.charCodeAt(i) - 32
      )
    } else {
      ans += str[i]
    }
}
console.log(ans)


//解法三：內建

let str = "Hi"
let ans = str.toUpperCase()
console.log(ans)
