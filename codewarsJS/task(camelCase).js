// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const testVar = ''


function toCamelCase(str) {
    if (str === '') {
        return ''
    } else {
        let changeStr = str.replace(/-/g, ' ').replace(/_/g, ' ')
        let changeList = changeStr.split(' ')
        // Проверка на первую болльшую букву
        let compareFirstIndex = changeList[0][0] === changeList[0][0].toUpperCase()
        if (compareFirstIndex) {
            let result = changeList.map(element => element[0].toUpperCase() + element.substring(1)).join('')
            return result
        } else {
            let result = changeList.map(element => element[0].toUpperCase() + element.substring(1)).join('')
            result = result.charAt(0).toLowerCase() + result.substring(1)
            return result
    }
    }
}

console.log(toCamelCase(testVar))