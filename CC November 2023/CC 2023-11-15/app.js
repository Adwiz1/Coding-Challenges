// Challenge (7 kyu):
// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, 
// the result will be the original number. It turns out that 198 is the only number with this property. 
// However, the property can be generalized so that each digit is concatenated n times and then summed.

function checkConcatenatedSum(number, n) {
    let strNumber = Math.abs(number).toString()
    let concatenatedSum = strNumber.split('').reduce((sum, digit) => {
        return sum + parseInt(digit.repeat(n), 10)
    }, 0)
    return concatenatedSum === Math.abs(number)
}