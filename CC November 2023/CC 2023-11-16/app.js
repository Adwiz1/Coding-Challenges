// Challenge (7 kyu):
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

function findScreenHeight(width, ratio) {
    let screenRatio = ratio.split(':')
    let height = width * (screenRatio[1] / screenRatio[0])
    let widthUpper = width.toString().toUpperCase()
    return `${width}x${height}`
  }