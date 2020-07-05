// 第一種會使用 reverse

function reverseString(str) {
    return str.split("").reverse().join("");
}
rS = reverseString("hello"); 
console.log(rS)

//第二種 for loop 
const reversestring1 = (word) => {
    let empty = ''
    for (let i = word.length -1 ; i >= 0; i-- ){
      empty += word[i]
    }
    return empty
  }
  rS = reversestring1('hello') 
  console.log(rS)


  // 第二種的for loop，用console.log測試判斷過程
  /* const reversestring1 = (word) => {
    let empty = ''
    for (let i = word.length -1 ; i >= 0; i-- ){
      console.log('i:', i)
      empty += word[i]
      console.log('empty:', empty)
    }
    return empty
  }
  rS = reversestring1 ('hello') 
  console.log(rS) */

  //結果：
 /* i: 4
empty: o
i: 3
empty: ol
i: 2
empty: oll
i: 1
empty: olle
i: 0
empty: olleh
olleh */