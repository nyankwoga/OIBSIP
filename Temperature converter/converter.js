function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var unitSelect = document.getElementById("unit");
    var resultElement = document.getElementById("result");

    var temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    var selectedUnit = unitSelect.value;

    if (selectedUnit === "celsius") {
        var convertedFahrenheit = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} Celsius is equal to ${convertedFahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        var convertedCelsius = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} Fahrenheit is equal to ${convertedCelsius.toFixed(2)} Celsius.`;
    }
}

