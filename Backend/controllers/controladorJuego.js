const Partida = require('../models/Partida');
const Ronda = require('../models/Ronda');
const Palabra = require('../models/Palabra');

// Crear una nueva partida
async function crearPartida(req, res) {
    const { jugador1, jugador2 } = req.body;
    try {
        const id = await Partida.crearPartida(jugador1, jugador2);
        res.json({ message: "Partida creada", id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Iniciar una nueva ronda dentro de la partida
async function iniciarRonda(req, res) {
    const { idPartida } = req.body;
    try {
        // Obtener la partida y los jugadores
        const partida = await Partida.obtenerPartidaPorId(idPartida);
        if (!partida) return res.status(404).json({ error: "Partida no encontrada" });

        // Obtener palabras aleatorias para los jugadores
        const palabraJugador1 = await Palabra.obtenerPalabraAleatoria();
        const palabraJugador2 = await Palabra.obtenerPalabraAleatoria();

        // Determinar el turno inicial
        const turnoInicial = partida.turno_actual;

        // Obtener el número de la próxima ronda
        const rondas = await Ronda.obtenerRondasPorPartida(idPartida);
        const numeroRonda = rondas.length + 1;

        // Crear la nueva ronda
        const idRonda = await Ronda.crearRonda(idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial);

        res.json({ message: "Ronda iniciada", idRonda, palabraJugador1, palabraJugador2, turnoInicial });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Manejar un turno en la ronda
async function jugarTurno(req, res) {
    const { idPartida, idRonda, jugador } = req.body;
    try {
        // Obtener la ronda actual
        const ronda = await Ronda.obtenerRondaPorId(idRonda);
        if (!ronda) return res.status(404).json({ error: "Ronda no encontrada" });

        // Validar si es el turno del jugador
        if (ronda.turno_actual !== jugador) {
            return res.status(400).json({ error: "No es tu turno" });
        }

        // Alternar el turno
        const nuevoTurno = await Ronda.alternarTurno(idRonda);

        res.json({ message: "Turno jugado", nuevoTurno });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Finalizar la partida y determinar el resultado
async function finalizarPartida(req, res) {
    const { idPartida, resultado, ganador } = req.body;
    try {
        await Partida.finalizarPartida(idPartida, resultado, ganador);
        res.json({ message: "Partida finalizada", resultado, ganador });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Obtener el historial de partidas jugadas
async function obtenerHistorial(req, res) {
    try {
        const historial = await Partida.obtenerHistorial();
        res.json(historial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    crearPartida,
    iniciarRonda,
    jugarTurno,
    finalizarPartida,
    obtenerHistorial
};
