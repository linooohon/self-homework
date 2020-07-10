
//join
function join(arr, concatStr) {
    let str = ''
    for (var i = 0; i < arr.length - 1; i++) {
      str = str + arr[i] + concatStr
    }
    return str + arr[arr.length-1]
  }
    console.log(join([1, 2, 3], ''));
    console.log(join(["a", 1, "b", 2, "c", 3], ','))
    console.log(join(["a", "b", "c"], "!"))


//repeat

function repeat(str, times) {
    let result = ''
    for (var i = 1; i <= times; i++) {
      result += str
    }
    return result
  }

  console.log(repeat('a', 5));
  console.log(repeat('yoyo', 2));
