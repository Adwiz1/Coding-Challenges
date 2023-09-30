//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')
    let combinedArr = s1Arr.concat(s2Arr)
    let sortedArr = combinedArr.sort()
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i+1]){
          sortedArr.splice(i,1)
          i--
        }
    }
    return sortedArr.join('')
  }


  // After looking at others solutions 'Set' seems to simply this process a lot as it only allows unique values.
  //function longest(s1, s2) {
  //  return Array.from(new Set(s1 + s2)).sort().join('');
  //}