function isValid(cardNumber) {
  //algoritmo de luhn 
  //-- 1 convertir el string o cadena de texto a un arreglo
  const cardNumberTextoAArreglo = cardNumber.split('');
  //console.log(cardNumberTextoAArreglo)

  //-- 2 recorriendo el arreglo y convertir los elementos a enteros
  const elementoTextoaNumero = cardNumberTextoAArreglo.map(function (elementoTextoaNumero) {
    return parseInt(elementoTextoaNumero);
  });
  //console.log(elementoTextoaNumero)
  //-- 3 Raversa
  const reverseElementoTextoaNumero = elementoTextoaNumero.reverse();
  //console.log(reverseElementoTextoaNumero)
  //-- 4 Ubicar las 2das posición  
  const resultadoDelNumeroMultiplicadoYSumado = reverseElementoTextoaNumero.map(function (elementOfArrayOfCardNumber, position) {
    if ((position + 1) % 2 === 0) {
      //-- 4.1 multiplicar por 2
      const elementMultipliedByTwo = elementOfArrayOfCardNumber * 2;
      //-- 4.2 si es mayor que 9 se sumaran entre si 
      if (elementMultipliedByTwo > 9) {
        //-- 4.3 convertimos a cadena de textos/strig 
        const numberToString = elementMultipliedByTwo + '';
        //-- 4.4 convertimos de cadena de textos/strig a arreglos
        const stringToArray = numberToString.split('');
        //-- 4.5 suma de elementos con la funcion del acumulador
        const sumaDeNumeros = stringToArray.reduce(function (acc, element) {
          return acc + parseInt(element);
        }, 0);

        return sumaDeNumeros;
      }
      return elementMultipliedByTwo;
    }
    return elementOfArrayOfCardNumber;
  })
  //console.log(resultadoDelNumeroMultiplicadoYSumado);

  //-- 5 Si al dividir la suma entre 10, el resultado es = 0, entonces es una tarjeta valida.

  const sumaTotal = resultadoDelNumeroMultiplicadoYSumado.reduce(function (acc, element) {
    return acc + parseInt(element);
  }, 0);
  if (sumaTotal % 10 === 0) {
    return true;
  }
  //--5.1 si no es falso
  return false;
}

const validator = {
  isValid: isValid,
  maskify: maskify
};


// -- funcion maskify 

function maskify(input, x) {
  return input.slice(0, x).replace(/./g, "#") + input.slice(x);
}


export default validator;