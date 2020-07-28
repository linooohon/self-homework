const reversestring = (word) => {
    let empty = ''
    for (let i = word.length -1 ; i >= 0; i-- ){
      console.log('i:', i)
      empty += word[i]
      console.log('empty:', empty)
    }
    return empty
  }
  rS = reversestring('hello') 
  console.log(rS)