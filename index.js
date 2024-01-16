const convertToCelsius = function (temperatureInFahrenheit) {
  const celsius = (temperatureInFahrenheit - 32) / 1.8;
  return celsius;
};

const getUserInput = function (message) {
  return prompt(message);
};

const printMessage = function (message) {
  console.log(message);
};

const TOO_COLD = 73;
const TOO_HOT = 77;
let temperatureInFahrenheit = getUserInput("Enter temperature in Fahrenheit:");

while (true) {
  let temperatureInCelsius = convertToCelsius(temperatureInFahrenheit);
  printMessage(temperatureInCelsius);

  if (temperatureInCelsius < TOO_COLD) {
    printMessage("Brrr... it's too cold! Turn up the heat a little. 🔥");
    temperatureInFahrenheit = getUserInput(
      "Enter a warmer temperature in Fahrenheit:"
    );
  } else if (temperatureInCelsius > TOO_HOT) {
    printMessage(
      "Whew, it's like a sauna in here! Well, more than usual. Turn down the heat a bit. ❄️"
    );
    temperatureInFahrenheit = getUserInput(
      "Enter a cooler temperature in Fahrenheit:"
    );
  } else {
    printMessage("Ah, just right! Enjoy your sauna session. 🧖‍♂️");
    break; // This will exit the loop
  }
}
