// Challenge (8 kyu):
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    let returnArr = []
    for(let i = 0; i < arr.length; i += 2){
      returnArr.push(arr[i])
    }
    return returnArr
  }