function printFactor(n) {
    for(let i=1; i<=n; i++) {
      if(n % i === 0) {
        console.log(i)
      }
    }
  }
  
  printFactor(10);
  printFactor(7);
  printFactor(5);
  printFactor(20);