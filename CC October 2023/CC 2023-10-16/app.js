// Challenge (7 kyu):

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    let lowestNum = Number.MAX_VALUE
    let secondLowest = Number.MAX_VALUE
    
    for(let i=0; i < numbers.length; i++){
      if(numbers[i] < lowestNum){
        secondLowest = lowestNum
        lowestNum = numbers[i]
      } else if(numbers[i] < secondLowest){
        secondLowest = numbers[i]
      }
    }
    return lowestNum + secondLowest
  }

// Cleaner sort solution.
//   function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b) => a - b)
//     return numbers[0] + numbers[1]
//   }