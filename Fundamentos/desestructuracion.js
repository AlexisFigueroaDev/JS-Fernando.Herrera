const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

/* console.log(deadpool.getNombre()); */

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */

/* const { nombre, apellido, poder, edad = 1 } = deadpool;
console.log(nombre, apellido, poder, edad); */

function imprimeHero({ nombre, apellido, poder, edad = 2 }) {
  console.log(nombre, apellido, poder, edad);
}

imprimeHero(deadpool);
