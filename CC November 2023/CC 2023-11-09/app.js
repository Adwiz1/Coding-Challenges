// Challenge (7 kyu):
// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

function minimum(a, x) {
    let remainder = a % x
      if (remainder === 0) {
          return 0
      } else {
          const add = (x - remainder) % x;
          const subtract = remainder % x;
          return Math.min(add, subtract);
      }
  }