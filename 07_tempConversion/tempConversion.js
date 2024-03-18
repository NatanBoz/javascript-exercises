const convertToCelsius = function(temp1) {
  let result = (temp1 - 32) * 5/9;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(temp2) {
  let result = (temp2 * (9/5) +32);
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
