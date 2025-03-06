// Importamos las librerías necesarias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde .env

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json()); // Para manejar JSON en las solicitudes

// Conectar a MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ahorcadoDB";

mongoose.connect(MONGO_URI, {
        }).then(() => {
            console.log('Conectado a MongoDB');
        }).catch(err => {
            console.error('Error al conectar a MongoDB:', err);
        });

// Importamos las rutas del juego
const gameRoutes = require('./routes/rutas.js');
app.use('/', gameRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { 
    console.log(` Server running on port ${PORT}`);
});
