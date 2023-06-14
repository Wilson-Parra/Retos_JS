function abrirModal(figura, operacion) {
    var contenidoModal = document.getElementById("contenidoModal");
    var tituloModal = document.getElementById("modalTitulo");
  
    // Limpiar contenido anterior del modal
    contenidoModal.innerHTML = "";
  
    // Configurar el contenido del modal según la figura y operación seleccionadas
    if (figura === "círculo") {
      if (operacion === "perímetro") {
        contenidoModal.innerHTML = '<label for="radio">Radio:</label>' +
          '<input type="number" id="radio">' +
          '<button class="btn btn-primary mt-3" onclick="calcularCirculoPerimetro()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Perímetro del Círculo";
      } else if (operacion === "área") {
        contenidoModal.innerHTML = '<label for="radio">Radio:</label>' +
          '<input type="number" id="radio">' +
          '<button class="btn btn-primary mt-3" onclick="calcularCirculoArea()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Área del Círculo";
      }
    } else if (figura === "triángulo") {
      if (operacion === "perímetro") {
        contenidoModal.innerHTML = '<label for="lado1">Lado 1:</label>' +
          '<input type="number" id="lado1">' +
          '<label for="lado2">Lado 2:</label>' +
          '<input type="number" id="lado2">' +
          '<label for="lado3">Lado 3:</label>' +
          '<input type="number" id="lado3">' +
          '<button class="btn btn-primary mt-3" onclick="calcularTrianguloPerimetro()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Perímetro del Triángulo";
      } else if (operacion === "área") {
        contenidoModal.innerHTML = '<label for="base">Base:</label>' +
          '<input type="number" id="base">' +
          '<label for="altura">Altura:</label>' +
          '<input type="number" id="altura">' +
          '<button class="btn btn-primary mt-3" onclick="calcularTrianguloArea()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Área del Triángulo";
      }
    } else if (figura === "rectángulo") {
      if (operacion === "perímetro") {
        contenidoModal.innerHTML = '<label for="largo">Largo:</label>' +
          '<input type="number" id="largo">' +
          '<label for="ancho">Ancho:</label>' +
          '<input type="number" id="ancho">' +
          '<button class="btn btn-primary mt-3" onclick="calcularRectanguloPerimetro()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Perímetro del Rectángulo";
      } else if (operacion === "área") {
        contenidoModal.innerHTML = '<label for="largo">Largo:</label>' +
          '<input type="number" id="largo">' +
          '<label for="ancho">Ancho:</label>' +
          '<input type="number" id="ancho">' +
          '<button class="btn btn-primary mt-3" onclick="calcularRectanguloArea()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Área del Rectángulo";
      }
    } else if (figura === "cuadrado") {
      if (operacion === "perímetro") {
        contenidoModal.innerHTML = '<label for="lado">Lado:</label>' +
          '<input type="number" id="lado">' +
          '<button class="btn btn-primary mt-3" onclick="calcularCuadradoPerimetro()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Perímetro del Cuadrado";
      } else if (operacion === "área") {
        contenidoModal.innerHTML = '<label for="lado">Lado:</label>' +
          '<input type="number" id="lado">' +
          '<button class="btn btn-primary mt-3" onclick="calcularCuadradoArea()">Calcular</button>';
        tituloModal.innerText = "Cálculo del Área del Cuadrado";
      }
    }
  
    // Abrir el modal
    var modal = new bootstrap.Modal(document.getElementById("modalCalculo"));
    modal.show();
  }
  
  function calcularCirculoPerimetro() {
    var radio = document.getElementById("radio").value;
    var perimetro = 2 * Math.PI * parseFloat(radio);
    alert("El perímetro del círculo es: " + perimetro.toFixed(2));
  }
  
  function calcularCirculoArea() {
    var radio = document.getElementById("radio").value;
    var area = Math.PI * Math.pow(parseFloat(radio), 2);
    alert("El área del círculo es: " + area.toFixed(2));
  }
  
  function calcularTrianguloPerimetro() {
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado3 = document.getElementById("lado3").value;
    var perimetro = parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3);
    alert("El perímetro del triángulo es: " + perimetro.toFixed(2));
  }
  
  function calcularTrianguloArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (parseFloat(base) * parseFloat(altura)) / 2;
    alert("El área del triángulo es: " + area.toFixed(2));
  }
  
  function calcularRectanguloPerimetro() {
    var largo = document.getElementById("largo").value;
    var ancho = document.getElementById("ancho").value;
    var perimetro = 2 * (parseFloat(largo) + parseFloat(ancho));
    alert("El perímetro del rectángulo es: " + perimetro.toFixed(2));
  }
  
  function calcularRectanguloArea() {
    var largo = document.getElementById("largo").value;
    var ancho = document.getElementById("ancho").value;
    var area = parseFloat(largo) * parseFloat(ancho);
    alert("El área del rectángulo es: " + area.toFixed(2));
  }
  
  function calcularCuadradoPerimetro() {
    var lado = document.getElementById("lado").value;
    var perimetro = 4 * parseFloat(lado);
    alert("El perímetro del cuadrado es: " + perimetro.toFixed(2));
  }
  
  function calcularCuadradoArea() {
    var lado = document.getElementById("lado").value;
    var area = Math.pow(parseFloat(lado), 2);
    alert("El área del cuadrado es: " + area.toFixed(2));
  }
  