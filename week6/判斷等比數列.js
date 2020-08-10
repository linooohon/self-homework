let arr = [2, 4, 8]

if (isValid(arr)) {
    console.log('Yes')
  } else {
    console.log('No')
  }

function isValid(arr) {
  let d = arr[1] / arr[0]
  for(let i=1; i<arr.length; i++) {
    if (arr[i] / arr[i-1] !== d) {
      return false
    }
  }
  return true
}

// 最後會印出 Yes