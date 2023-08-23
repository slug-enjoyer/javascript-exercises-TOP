const convertToCelsius = function(fTemp) {
  let celsius = ((fTemp-32)/1.8);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheit = ((cTemp*1.8)+32);
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
