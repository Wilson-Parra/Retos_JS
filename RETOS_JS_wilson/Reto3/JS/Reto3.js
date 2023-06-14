function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var result;
  
    if (fromUnit === toUnit) {
      alert("Las unidades de conversión deben ser diferentes.");
      return;
    }
  
    switch (fromUnit) {
      case "celsius":
        switch (toUnit) {
          case "fahrenheit":
            result = (temperature * 9/5) + 32;
            break;
          case "kelvin":
            result = temperature + 273.15;
            break;
        }
        break;
      case "fahrenheit":
        switch (toUnit) {
          case "celsius":
            result = (temperature - 32) * 5/9;
            break;
          case "kelvin":
            result = (temperature + 459.67) * 5/9;
            break;
        }
        break;
      case "kelvin":
        switch (toUnit) {
          case "celsius":
            result = temperature - 273.15;
            break;
          case "fahrenheit":
            result = (temperature * 9/5) - 459.67;
            break;
        }
        break;
      default:
        alert("Unidades de temperatura inválidas.");
        return;
    }
  
    result = result.toFixed(2); // Limitar a dos cifras decimales
  
    alert("El resultado de la conversión es: " + result);
  }
  