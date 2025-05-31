function operar(operacion) {
  let onedata = document.getElementById("onedata").value.trim();
  let twodata = document.getElementById("twodata").value.trim();
  let resultadoInput = document.getElementById("result");
  
  //  validar si los datos estan vacios 
  if ( onedata === "" || twodata === ""){
    alert ("Por favor ingresa ambos numeros .");
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




