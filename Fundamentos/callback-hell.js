const empleados = [
  {
    id: 1,
    nombre: 'Alexis',
  },
  {
    id: 2,
    nombre: 'Linda',
  },
  {
    id: 3,
    nombre: 'Karen',
  },
];

const salarios = [
  {
    id: 1,
    salario: 5000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;

  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario con id ${id} no existe`);
  }
};

getEmpleado(3, (err, empleado) => {
  if (err) {
    return console.log(err);
  }

  console.log(empleado.nombre);
});

getSalario(10, (err, salario) => {
  if (err) {
    return console.log(err);
  }

  console.log(salario);
});
