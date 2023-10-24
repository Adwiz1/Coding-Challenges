// Challenge (7 kyu):
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
    let lowestNum = arr[0]
    let highestNum = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowestNum) {
        lowestNum = arr[i]
      }
      if (arr[i] > highestNum) {
        highestNum = arr[i]
      }
    }
  
    let returnArr = [lowestNum, highestNum]
    return returnArr
  }

// Much simpler solution using the spread operator
//   function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }