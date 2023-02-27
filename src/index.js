import validator from './validator.js';

const propietario = document.getElementById("propietario");
const cardNameDinamico = document.getElementById("nameDinamico");
const inputFecha = document.getElementById("cardDate");
const fechaDinamica = document.getElementById("fechaDinamica");

// -- Ingreso del Nombre dinamico
propietario.addEventListener("input", function () {
  if (propietario.value === '') {
    cardNameDinamico.innerText = 'CLAUDIA ORTIZ'
  } else { cardNameDinamico.innerText = propietario.value }
});

// -- Ingreso del fecha dinamico  
inputFecha.addEventListener("input", function () {
  if (inputFecha.value === ' ') {
    fechaDinamica.innerText = '01/2023'
  } else { fechaDinamica.innerText = inputFecha.value }
})


// -- Constante del boton para ejecutar el evento 
const botonValidar = document.getElementById("Validar");
const inputCardNumber = document.getElementById("cardNumber");

botonValidar.addEventListener("click", function () {
  if (inputCardNumber.value.length === 16) {
    const titulo = document.getElementById("title");
    const pantalla1 = document.getElementById("pantalla1");

    pantalla1.style.display = "none";
    titulo.style.display = "none";
    const tarjetaValidada = validator.isValid(inputCardNumber.value);
    const invalidado = document.getElementById("invalidado");

    // -- mostar la pantalla de respuesta
    if (tarjetaValidada === true) {
      const validado = document.getElementById("validado");
      validado.style.display = "block";
    } else {
      invalidado.style.display = "block";
    }
    const vistaNumeroValido = document.getElementById("vistaNumeroValido");
    vistaNumeroValido.value = inputCardNumber.value
    //console.log(tarjetaValidada);
  }
  else { alert("Llenar los campos requeridos") }
})


const pantalla1 = document.getElementById("pantalla1");

//button de volver1 a pantalla 1
const volver1 = document.getElementById("volver1");

volver1.addEventListener("click", function () {
  const titulo = document.getElementById("title");

  titulo.style.display = "block";
  const validado = document.getElementById("validado");
  pantalla1.style.display = "block";
  validado.style.display = "none";
  const propietarioDinamico = document.getElementById("propietario");
  propietarioDinamico.value = "";
  const inputCardNumber = document.getElementById("cardNumber");
  inputCardNumber.value = "";
  const inputFecha = document.getElementById("cardDate");
  inputFecha.value = '';
  const inputCardCVV = document.getElementById("cardCVV");
  inputCardCVV.value = '';

  const numberDinamico = document.getElementById("numberDinamico");
  numberDinamico.innerText = '0000 0000 0000 0000 ';
  const cardNameDinamico = document.getElementById("nameDinamico");
  cardNameDinamico.innerText = 'XXXXX XXXXXX';
  const fechaDinamica = document.getElementById("fechaDinamica");
  fechaDinamica.innerText = '';
  const cvvDinamica = document.getElementById("cvvDinamico");
  cvvDinamica.innerText = '000';
})

//button de volver2 a pantalla 1
const volver2 = document.getElementById("volver2");
volver2.addEventListener("click", function () {
  const titulo = document.getElementById("title")
  titulo.style.display = "block";
  const invalidado = document.getElementById("invalidado");
  pantalla1.style.display = "block";
  invalidado.style.display = "none";
  const propietarioDinamico = document.getElementById("propietario");
  propietarioDinamico.value = "";
  const inputCardNumber = document.getElementById("cardNumber");
  inputCardNumber.value = '';
  const inputFecha = document.getElementById("cardDate");
  inputFecha.value = '';
  const inputCardCVV = document.getElementById("cardCVV");
  inputCardCVV.value = '';

  const numberDinamico = document.getElementById("numberDinamico");
  numberDinamico.innerText = '0000 0000 0000 0000';
  const cardNameDinamico = document.getElementById("nameDinamico");
  cardNameDinamico.innerText = '';
  const fechaDinamica = document.getElementById("fechaDinamica");
  fechaDinamica.innerText = '';
  const cvvDinamica = document.getElementById("cvvDinamico");
  cvvDinamica.innerText = '000';
})



// -- funcion maskify 
const numberDinamico = document.getElementById("numberDinamico");

inputCardNumber.addEventListener("input", function (e) {
// -- ingresar elementos solo digitos ( Número de tarjeta) si no ingresa nada
  const soloDigitos = e.target.value.replace(/[^0-9]/g, '');
  inputCardNumber.value = soloDigitos

  if (inputCardNumber.value === '') {
    numberDinamico.innerText = '0000 0000 0000 0000'
  } else { numberDinamico.innerText = validator.maskify(soloDigitos, -4) }
})

const inputCardCVV = document.getElementById("cardCVV");
const cvvDinamica = document.getElementById("cvvDinamico");

// -- ingresar elementos solo digitos en CVV si no ingresa nada
inputCardCVV.addEventListener("input", function (e) {
  const soloDigitosCvv = e.target.value.replace(/[^0-9]/g, '');
  inputCardCVV.value = soloDigitosCvv

  if (inputCardCVV.value === ' ') {
    cvvDinamica.innerText = '000'
  } else { cvvDinamica.innerText = validator.maskify(soloDigitosCvv, 3) }
})
