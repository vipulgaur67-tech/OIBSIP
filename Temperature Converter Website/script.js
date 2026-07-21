function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "❌ Please enter a valid temperature.";
    result.style.color = "red";
    return;
  }

  if (from === to) {
    result.innerHTML = `Result: ${temp.toFixed(2)} °${to}`;
    result.style.color = "green";
    return;
  }

  let celsius;

  // Convert input to Celsius first
  switch (from) {
    case "C":
      celsius = temp;
      break;

    case "F":
      celsius = ((temp - 32) * 5) / 9;
      break;

    case "K":
      celsius = temp - 273.15;
      break;
  }

  let finalTemp;

  // Convert Celsius to target unit
  switch (to) {
    case "C":
      finalTemp = celsius;
      break;

    case "F":
      finalTemp = (celsius * 9) / 5 + 32;
      break;

    case "K":
      finalTemp = celsius + 273.15;
      break;
  }

  let symbol = "";

  switch (to) {
    case "C":
      symbol = "°C";
      break;

    case "F":
      symbol = "°F";
      break;

    case "K":
      symbol = "K";
      break;
  }

  result.style.color = "#0072ff";
  result.innerHTML = `Converted Temperature <br><br> ${finalTemp.toFixed(2)} ${symbol}`;
}

function clearFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("fromUnit").selectedIndex = 0;
  document.getElementById("toUnit").selectedIndex = 0;
  document.getElementById("result").innerHTML = "";
}
