// Create a function that takes a positive integer and returns the next bigger number that can 
// be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

let testData = 576


function nextBigger(input) {
    if (String(input).length === 1) {
        console.log(5);
        return -1
    } else if (String(input).length === String(input / +String(input)[0]).split('').reduce((sum, elem) => Number(sum) + Number(elem))) {
        console.log(5);
        return -1
    } else if (Number(String(input).split('').sort((a,b) => b-a).join('')) === input) {
        console.log(5);
        return -1
    } else {
        // let factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1; 
        // for (let i = 0; i < factorial(+String(input).length); i++) {
        console.log(String(input).slice(1));
    } 
}


nextBigger(testData)