const convertToCelsius = function(temperature) {
    let celsius = ((temperature - 32)*(5/9))
    let celsiusRounded = Math.round(celsius * 10) / 10 
    return celsiusRounded
};

const convertToFahrenheit = function(temperature) {
    let fahrenheit = (temperature * 9)/5 + 32
    let fahrenheitRounded = Math.round(fahrenheit * 10) / 10 
    return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
