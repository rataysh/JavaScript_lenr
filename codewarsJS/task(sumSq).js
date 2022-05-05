// Complete the square sum function so that it squares each number passed into it and then sums 
// the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9


let testData = [0, 3, 4, 5]


function squareSum(numbers) {
    let sumAllNumb = 0
    for (const i of numbers) {
        sumAllNumb += i*i
    }
    return sumAllNumb
}

// function squareSum(numbers) {
//     return numbers.reduce((s,a)=>s+a*a,0);
// }

squareSum(testData)