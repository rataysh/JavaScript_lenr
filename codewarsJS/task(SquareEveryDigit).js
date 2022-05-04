// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer



let testData = 9119

function squareDigits(num) {
    let listResult = []
    let testList = String(num).split('')
    testList.forEach(element => listResult.push(element*element))
    return Number(listResult.join(''))
}


console.log(squareDigits(testData))