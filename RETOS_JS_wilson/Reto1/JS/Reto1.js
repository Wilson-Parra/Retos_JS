function processChoice() {
    var word = document.getElementById("reto1").value;
    var option = document.getElementById("options").value;
    var result;
  
    switch (option) {
      case "1":
        result ="La longuitud de la palabra ingresada es "+ word.length;
        break;
      case "2":
        result = word.toUpperCase();
        break;
      case "3":
        result = word.toLowerCase();
        break;
      case "4":
        result = word.charAt(0);
        break;
      default:
        result = "Lo sientoi pero la Opción es inválida";
    }
  
    alert(result);
  }
  