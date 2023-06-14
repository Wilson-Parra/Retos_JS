function redirect() {
    var reto = document.getElementById("reto").value;
  
    switch (reto) {
      case "reto1":
        window.location.href = "Reto1/indexReto1.html"; 
        break;
        case "reto2":
            window.location.href = "Reto2/indexReto2.html"; 
            break;
      case "reto3":
        window.location.href = "Reto3/indexReto3.html"; 
        break;
      case "reto4":
        window.location.href = "Reto4/indexReto4.html"; 
        break;
        case "reto5":
          window.location.href = "Reto5/indexReto5.html"; 
          break;
          case "reto6":
            window.location.href = "Reto6/indexReto6.html"; 
            break;
            case "reto7":
              window.location.href = "Reto7/indexReto7.html"; 
              break;
      default:
        alert("Opción de reto inválida");
        break;
    }
  }
  