const express = require('express');
const { crearPartida, obtenerPartidaPorId, finalizarPartida, siguienteRonda, verificarNumeroRondas  } = require('../services/servicioPartida');

const router = express.Router();

router.post('/partida', async (req, res) => {
    const { jugador1, jugador2 } = req.body;
    try {
        const partida = await crearPartida(jugador1, jugador2);
        res.status(201).json({ success: true, message: 'Partida creada',id: partida });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.get('/partida/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const partida = await obtenerPartidaPorId(id);
        res.status(200).json({ success: true, message: 'Partida encontrada', partida });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/partida/:id/finalizar', async (req, res) => {
    const { id, ganador } = req.body;
    try {
        const partida = await finalizarPartida(id, ganador);
        res.status(200).json({ success: true, message: 'Partida finalizada', partida });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/partida/:id/siguiente', async (req, res) => {
    const { id } = req.params;
    try {
        const partida = await siguienteRonda(id);
        res.json(partida);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/partida/:id/verificar', async (req, res) => {
    const { id } = req.params;
    try {
        const partida = await verificarNumeroRondas(id);
        res.json(partida);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;