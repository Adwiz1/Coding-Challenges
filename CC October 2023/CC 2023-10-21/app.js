// Challenge (8 kyu):
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let total = 1
    x.forEach((element) => total = element * total)
    return total
  }

// One line solution
//  const grow=x=> x.reduce((a,b) => a*b)