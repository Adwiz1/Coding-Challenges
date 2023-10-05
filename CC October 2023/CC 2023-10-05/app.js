//// Challenge (8 kyu):
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    if(n < 0 || m < 0){
      return 0
    }
    return n*m
  }

// Slightly cleaner solution with ternary statement.
//   function paperwork(n, m) {
//     return n < 0 || m < 0 ? 0 : n * m;
// }

//// Challenge (8 kyu):
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue) / classPoints.length
    if(average < yourPoints){
      return true
    }
    return false
  }

// Single line solution.
//   function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }