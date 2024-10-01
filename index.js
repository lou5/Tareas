const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const tareaRouters = require('./routes/tareaRouters');
const initializeDatabase = require('./initdb');

const port = 4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/crearTarea', tareaRouters);
app.use('/buscar', tareaRouters);


initializeDatabase().then(() => {
    app.listen(port, () => {
      console.warn(`Servidor escuchando en el puerto ${port} - Conectado a Oracle Database 19c Standard Edition 2 Release 19.0.0.0.0`);
    });
  }).catch((error) => {
    console.error('No se pudo iniciar el servidor debido a un error con la base de datos:', error);
  });

