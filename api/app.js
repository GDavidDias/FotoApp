const express = require('express');
const cors = require('cors');

// const especialidadRoutes = require('./src/routes/especialidad.routes.js');
const pedidosRoutes = require('./src/routes/pedidos.routes.js');

const app = express();

//Configuracion de Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//HABILITO CORS
app.use(cors());

//rutas
// app.use('/api', especialidadRoutes);
app.use('/api',pedidosRoutes);



module.exports = app;