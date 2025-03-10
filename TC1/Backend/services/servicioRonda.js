const Ronda = require("../models/Ronda");

async function crearRonda(idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial) {
    return await Ronda.crearRonda(idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial);
}

async function obtenerRondasPorPartida(idPartida) {
    return await Ronda.obtenerRondasPorPartida(idPartida);
}

async function alternarTurno(idRonda) {
    return await Ronda.alternarTurno(idRonda);
}

async function verificarLetra(idRonda, letra) {
    return await Ronda.verificarLetra(idRonda, letra);
}

module.exports = { crearRonda, obtenerRondasPorPartida, alternarTurno, verificarLetra };
