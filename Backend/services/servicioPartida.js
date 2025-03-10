const Partida = require('../models/Partida');


async function crearPartida( jugador1, jugador2 ) {
    return await Partida.crearPartida(jugador1, jugador2);
}

async function obtenerPartidaPorId( id ) {
    return await Partida.obtenerPartidaPorId(id);
}

async function finalizarPartida( id, ganador ) {
    return await Partida.finalizarPartida(id, ganador);
}

async function siguienteRonda( id ) {
    return await Partida.siguienteRonda(id);
}

async function verificarNumeroRondas( id ) {
    return await Partida.verificarNumeroRondas(id);
}

module.exports = { crearPartida, obtenerPartidaPorId, finalizarPartida, siguienteRonda, verificarNumeroRondas };

