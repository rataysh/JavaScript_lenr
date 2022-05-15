// Description task:
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

let textNotJaden = "How can mirrors be real if our eyes aren't real";

function textJadenFunc(inputText) {
    let listWithNotJadenText = inputText.split(" ");
    let listJaden = listWithNotJadenText.map(
        (element) => element[0].toUpperCase() + element.substring(1)
    );
    return listJaden.join(" ");
    // let newList = listWithNotJadenText.map(element => {
    //     return element.toUpperCase() + element.substring(1)
    // })
}

textJadenFunc(textNotJaden);
