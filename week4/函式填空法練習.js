// 判斷是否是質數


// 第一步，虛擬碼

for (i from 0 to n-1) do
 if (arrp[i] 是質數) do
  print "Prime"
 else 
  print "Composite"
 end if
end for


// 第二步，程式碼

for (let i=0; i<n: i++) {
    if (arr[i] 是質數) {
        console.log("Prime")
    } else {
        console.log("Composite")
    } 
}

// 第三步，簡化問題，實作isPrime

for (let i=0; i<n: i++) {
    if (isPrime(arr[i])) {
        console.log("Prime")
    } else {
        console.log("Composite")
    }
}
function isPrime(n) {
  //這裡要再實際敘述判斷方法，也就是底下的程式碼
}

// 接下來實作判斷質數邏輯

function isPrime(n) {
    if (n === 1) return false
    for (let i=2; i<n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

//所以第一個版本的解法就是上面加在一起，是所謂的“比較有架構的函式法”

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


// 第二個版本的解法，混在一起，較無架構的一種

for (let i=0; i<n; i++) {
    let isPrime = true
    if (arr[i] === 1) {
        isPrime = false
    }
    for (let j=2; j<arr[i]; j++) {
        if (arr[i] % j === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log("Prime")
    } else {
        console.log("Composite")
    }
}