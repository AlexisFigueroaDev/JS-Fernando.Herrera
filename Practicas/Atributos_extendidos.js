/*
 *
 * Atributos extendidos
 *
 */

let myName = {
  firstname: 'Alexis',
  middlename: 'Gabriel',
};

let lastname = 'Figueroa';

//los 3 puntos agregan un objeto dentro de uno nuevo trayendo la informacion del objeto

let myLife = {
  ...myName,
  lastname,
};

// console.log(myLife);

//Arreglo

let heroes = ['Batman', 'Superman'];

let villanos = ['villano1', 'villano2'];

console.log(heroes);
console.log(villanos);

let personajes = [...heroes, ...villanos];
console.log(personajes);
