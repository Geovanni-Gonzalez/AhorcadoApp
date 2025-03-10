const express = require('express');
const { crearRonda, obtenerRondasPorPartida, alternarTurno, verificarLetra } = require('../services/servicioRonda');

const router = express.Router();

router.post('/', async (req, res) => {
    const { idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial } = req.body;
    try {
        const id = await crearRonda(idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial);
        res.json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:idPartida', async (req, res) => {
    try {
        const rondas = await obtenerRondasPorPartida(req.params.idPartida);
        res.json(rondas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/turno', async (req, res) => {
    try {
        const turno = await alternarTurno(req.body.idRonda);
        res.json({ turno });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/verificarLetra', async (req, res) => {
    const { idRonda, letra } = req.body;
    try {
        const esCorrecta = await verificarLetra(idRonda, letra);
        res.json({ esCorrecta });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
