function solve(lines) {
    const n = Number(lines[0]);
    let result = '';
    for (let i = 1; i <= n; i += 1) {
      result += '*';
      console.log(result);
    }
  }
  
  solve(['10']);
  solve(['5'])