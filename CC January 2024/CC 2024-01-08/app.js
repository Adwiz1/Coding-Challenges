// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]

function averages(numbers) {
    let returnArr = []
    if(numbers === null){
      return []
    }
    for(let i = 0; i < numbers.length - 1; i++){
      returnArr.push((numbers[i] + numbers[i+1]) / 2)
    }
    return returnArr
  }