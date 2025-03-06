//Rutas
const express = require('express'); // Importamos express
const { getGames, getGame, createGame, updateGame, deleteGame } = require('../controllers/controladorJuego'); // Importamos los controladores
const { model } = require('mongoose');

const router = express.Router();

// Inicio
router.get('/', (req, res) => {
    res.send('API de juegos');
});


module.exports = router; // Exportamos el router

