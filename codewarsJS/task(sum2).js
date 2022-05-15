let testData =
    "1           3     5                        7     9    11                       13    15    17    19";

function rowSumOddNumbers(n) {
    let listData = n
        .split(" ")
        .map((element) => (element === "" ? 0 : element))
        .reduce((sum, elem) => Number(sum) + Number(elem));
    return listData;
}

rowSumOddNumbers(testData);
