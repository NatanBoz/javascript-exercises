const sumAll = function(num1, num2) {
    let numbers = [];
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    for (num1; num1<=num2; num1++) {
        numbers.push(num1)
    }
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += Number(numbers[i])
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
