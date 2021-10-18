const db = require('./db/db');

const nombre = 'Alexis';

const buscoParticipante = (req, res) => {
  //nombre = req.body;

  const user = Object.values(db.participantes).find((e) => e.nombre === nombre);

  if (user !== undefined) {
    console.log(user);

    res.json({
      message: user,
    });
  } else {
    console.log(user);
    res.json({
      message: 'No existe el usuario',
    });
  }
};

//console.log(buscoParticipante(id));
console.log(Object.values(db.participantes).find((e) => e.nombre === nombre));
