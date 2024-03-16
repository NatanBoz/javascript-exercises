const reverseString = function(str) {
    let result = [];
    let i = 0
    do {
        result.push(str.at(i));
        i++;
    } while (i < str.length)
    const reversedArray = result.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
