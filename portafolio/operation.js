function operar(operacion) {
  let onedata = document.getElementById("onedata").value.trim();
  let twodata = document.getElementById("twodata").value.trim();
  let resultadoInput = document.getElementById("result");
  
  //  validar si los datos estan vacios 
  if ( onedata === "" || twodata === ""){
    alert ("Por favor ingresa tus valores .");
    resultadoInput.value = "";
    return;
  }
  
  //convertir en numeros
  let num1 = parseFloat(onedata);
  let num2 = parseFloat(twodata);
  
  if (isNaN(num1) || isNaN(num2)) {
    alert("Uno de los valores no es numero valido");
    resultadoInput.value = "";
    return;
  }
  
  let resultado;
  //realiza las operaciones
  if (operacion === "sumar") {
    resultado = num1 + num2;
  }else if (operacion === "restar") {
    resultado = num1 - num2;
  }else if (operacion === "multiplicar") {
    resultado = num1 * num2;
  }else if (operacion === "dividir") {
    if (num2 === 0){
      alert("No se puede dividir entre cero");
      resultadoInput.value = "";
      return;
    }
    
    resultado =num1 / num2;
  } else {
    alert("operacion no valida");
    resultadoInput = "";
    return; 
  }
  
  //mostrar el resultado
  resultadoInput.value = resultado;
}

function reset() {
  // Limpiar los campos de entrada y resultado
  document.getElementById("onedata").value = "";
  document.getElementById("twodata").value = "";
  document.getElementById("result").value = "";
}



//operaciones del reloj "DESDE AQUI EMPEZAMOS CON EL JS DE RELOJ"


const hora = document.getElementById('hora');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function actualizarHora (){
  const fechaActual = new Date();
  hora.textContent = String(fechaActual.getHours()).padStart(2, 0);
  min.textContent = String(fechaActual.getMinutes()).padStart(2, 0);
  sec.textContent = String(fechaActual.getSeconds()).padStart(2, 0);
  
}
setInterval(actualizarHora, 1000);
actualizarHora();