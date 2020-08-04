//第一種解法 : 迴圈直接判斷相乘是不是小於 100

let i = 1
while (i * i <= 100) {
    console.log(i * i)
    i++
}

/* 第二種解法 : 迴圈套 function ， 
funtion 去判斷開根號又無條件捨去後，再把數字相乘回去看是不是等於原來，判斷 true or false
*/

for (let i=1; i<=100; i++) {
    if (isIt(i)){
        console.log(i)
    }
}

function isIt(n) {
    let root = Math.floor(Math.sqrt(n))
    return root * root === n
}