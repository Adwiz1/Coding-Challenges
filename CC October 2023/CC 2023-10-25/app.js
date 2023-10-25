// Challenge (8 kyu):
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
function getAverage(marks){
    let classAverage = marks.reduce((accumulator, currentValue) => accumulator + currentValue)
    return Math.floor(classAverage / marks.length)
  }

// Single line solution

//   function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length)
//   }

// Challenge (7 kyu):
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
function repeats(arr){
    let filteredArr = arr.filter((num, index, array) => array.indexOf(num) === array.lastIndexOf(num))
    return filteredArr.reduce((sum, x) => sum + x)
  }