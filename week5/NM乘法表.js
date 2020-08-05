function solve(lines) {
    let N = Number(lines[0])
    let M = Number(lines[1])
    for(let k=1; k<=N; k++) {
        for(let i=1; i<=M; i++) {
            console.log(k + '*' + i + '=' + k*i)
            // console.log(`${k}*${i}=${k*i}`) ，ES6寫法
        }
    }
}

solve(['15', '3'])