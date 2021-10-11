function sumar(a, b = 10) {
  return a + b;
}

console.log(sumar(5));

function resta(a, b) {
  return a - b;
}

console.log(resta(5, 2));

const sumar2 = (a, b) => {
  return a + b;
};

console.log(sumar2(5, 3));

const sumar3 = (a, b) => a + b;

console.log(sumar3(5, 4));

const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar('Alexis'));

//pusheado
