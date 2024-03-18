const leapYears = function(year) {
    let condition1 = function() {
        if (year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }
    let condition2 = function() {
        if (year % 100 == 0 && !(year % 400 == 0 || year % 800 == 0)) {
            return false
        } else {
            return true
        }    
    }
    let result = condition1() && condition2()
    return Boolean(result)
};

// Do not edit below this line
module.exports = leapYears;
