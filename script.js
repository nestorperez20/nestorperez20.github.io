function calcularGanancia() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let total = valor2 - valor1;
    let totalfinal = (total / valor1) * 100;
    document.getElementById("total").value = "$" + total;
    document.getElementById("porcentaje").value = totalfinal.toFixed(2) + "%";
  }
  