const convertToCelsius = function(temp) {
  let celTemp=(temp-32)*5/9
  return Number(celTemp.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let fahTemp=(temp*9/5)+32;
  return Number(fahTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
