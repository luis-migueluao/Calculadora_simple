function calcularCuota() {
  // Obtener valores de los inputs
  let nombre = document.getElementById("nombre").value.trim();
  let prestamo = parseFloat(document.getElementById("prestamo").value);
  let meses = parseInt(document.getElementById("meses").value);
  let interesAnual = parseFloat(document.getElementById("interes").value) / 100;

  // Validaciones básicas
  if (!nombre || isNaN(prestamo) || isNaN(meses) || isNaN(interesAnual)) {
    alert("⚠️ Por favor, ingresa todos los datos correctamente.");
    return;
  }

  // Calcular interés mensual
  let i = interesAnual / 12;

  // Fórmula de la cuota mensual
  let cuota = prestamo * ((Math.pow(1 + i, meses) * i) / (Math.pow(1 + i, meses) - 1));

  // Redondear a 2 decimales
  cuota = cuota.toFixed(2);

  // Crear mensaje de salida
  let texto = `${nombre} debe pagar $${cuota} cada mes por el préstamo de $${prestamo} a ${meses} meses con el interés del ${(interesAnual*100).toFixed(2)}%.`;

  // Mostrar resultado en el textarea
  document.getElementById("resultado").value = texto;
}