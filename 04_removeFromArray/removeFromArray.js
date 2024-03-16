const removeFromArray = function(array = [], ...remove) {
    const filteredArray = array.filter(item => !remove.includes(item));
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
