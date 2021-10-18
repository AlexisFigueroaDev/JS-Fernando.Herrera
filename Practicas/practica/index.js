const express = require('express');
// const routes = require('./routes');
const bodyParser = require('body-parser');
const db = require('./db/db');

const env = require('node-env-file');
env('Environment.env');

const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', routes());

app.listen(process.env.PORT);

console.log(`Escuchando el puerto ${process.env.PORT}`);

//Middleware
const token = (req, res, next) => {
  auth = req.header('auth');

  console.log(auth);
  if (auth !== '1234') {
    res.status(401).json({
      message: 'No tiene acceso',
    });
  }

  next();
};

//controllers
const buscoParticipante = (req, res) => {
  nombre = req.body;

  const user = Object.values(db.participantes).find(
    (e) => e.nombre === nombre.nombre
  );

  if (user !== undefined) {
    res.json({
      message: user,
    });
  } else {
    res.json({
      message: 'No existe el usuario',
    });
  }
};

//ROUTES
app.get('/busco', [token], buscoParticipante);
