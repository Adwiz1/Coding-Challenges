// Challenge (7 kyu):
//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000.

// Original solution timed out due to inefficient time on large test.
// function getDivisorsCnt(n){
//   let divisors = 1
//   for(let i = 0; i < n; i++){
//     if(n % i === 0){
//       divisors++
//     }
//   }
//   return divisors
// }

// Revised version for efficiency.
function getDivisorsCnt(n) {
    let divisors = 0
    for(let i = 1; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        if(i === n / i){
          divisors++
        }else{
          divisors += 2
        }
      }
    }
    return divisors
  }