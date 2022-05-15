// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"

let oddText = "tests";
let evenText = "test";

function oddOrEven(inputText) {
    if (inputText.length % 2 === 0) {
        return inputText.slice(
            inputText.length / 2 - 1,
            inputText.length / 2 + 1
        );
        // let result = inputText.slice(inputText.length / 2 - 1, inputText.length / 2 + 1)
        // console.log(result)
    } else {
        return inputText.slice(inputText.length / 2, inputText.length / 2 + 1);
        // let result = inputText.slice(inputText.length / 2, inputText.length / 2 + 1)
        // console.log(result)
    }
}

oddOrEven(oddText);
