let testData = [4, 5, -11, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
    let listPlus = [];
    let listMinus = [];
    if (input == null) {
        // console.log([]);
        return [];
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            listPlus.push(input[i]);
        } else if (input[i] < 0) {
            listMinus.push(input[i]);
        }
    }
    if (listMinus == 0 && listPlus == 0) {
        // console.log([]);
        return [];
    } else if (listMinus == 0) {
        // console.log([listPlus.length, 0]);
        return [listPlus.length, 0];
    } else {
        let resultMinus = listMinus.reduce((sum, elem) => sum + elem);
        // console.log([listPlus.length, resultMinus]);
        return [listPlus.length, resultMinus];
    }
}

// return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];

countPositivesSumNegatives(testData);
