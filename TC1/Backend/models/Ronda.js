const db = require("../db");

class Ronda {
    async crearRonda(idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial) {
        try {
            const query = `INSERT INTO rondas (id_partida, numero_ronda, palabra_jugador_1, palabra_jugador_2, turno_actual) 
                        VALUES (?, ?, ?, ?, ?)`;
            const [result] = await db.query(query, [idPartida, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial]);

            return result.insertId; 
        } catch (err) {
            console.error("Error al crear la ronda:", err);
            throw new Error("Error al crear la ronda");
        }
    }

    async obtenerRondasPorPartida(idPartida) {
        try {
            const query = `SELECT * FROM rondas WHERE id_partida = ? ORDER BY numero_ronda`;
            const [result] = await db.query(query, [idPartida]);
            return result;
        } catch (err) {
            console.error("Error al obtener rondas:", err);
            throw new Error("Error al obtener rondas");
        }
    }

    async alternarTurno(idRonda) {
        try {
            const query = `SELECT turno_actual, palabra_jugador_1, palabra_jugador_2 FROM rondas WHERE id = ?`;
            const [result] = await db.query(query, [idRonda]);

            if (result.length === 0) throw new Error("Ronda no encontrada");

            const ronda = result[0];
            const nuevoTurno = ronda.turno_actual === ronda.palabra_jugador_1 ? ronda.palabra_jugador_2 : ronda.palabra_jugador_1;

            const updateQuery = `UPDATE rondas SET turno_actual = ? WHERE id = ?`;
            await db.query(updateQuery, [nuevoTurno, idRonda]);

            return nuevoTurno;
        } catch (err) {
            console.error("Error al alternar el turno en la ronda:", err);
            throw new Error("Error al alternar el turno en la ronda");
        }
    }

    async verificarLetra(idRonda, letra) {
        try {
            const query = `SELECT palabra_jugador_1, palabra_jugador_2, turno_actual FROM rondas WHERE id = ?`;
            const [result] = await db.query(query, [idRonda]);

            if (result.length === 0) throw new Error("Ronda no encontrada");

            const ronda = result[0];
            const palabra = ronda.turno_actual === ronda.palabra_jugador_1 ? ronda.palabra_jugador_1 : ronda.palabra_jugador_2;

            return palabra.includes(letra);
        } catch (err) {
            console.error("Error al verificar letra en la ronda:", err);
            throw new Error("Error al verificar letra en la ronda");
        }
    }
}

module.exports = new Ronda();
