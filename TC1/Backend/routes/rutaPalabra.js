const express= require('express');
const { obtenerPalabraAleatoria } = require('../services/servicioPalabra');

const router = express.Router();

router.get('/palabra', async (req, res) => {
    try {
        const palabra = await obtenerPalabraAleatoria();
        res.json({ palabra });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;

