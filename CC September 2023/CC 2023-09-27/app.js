// Challenge (7 kyu):
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    if (array.length === 0) {
      return "even"
    }
     const result = array.reduce((accumulator, currentValue) => accumulator + currentValue)
     
     if (result % 2 === 0) {
       return "even"
     } 
     else {
       return "odd"
     }
   }