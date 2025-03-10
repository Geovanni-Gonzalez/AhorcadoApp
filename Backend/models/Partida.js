const db = require("../db");

class Partida {

    async crearPartida(jugador1, jugador2) {
        try {
            const query = `INSERT INTO partidas (jugador_1, jugador_2) VALUES (?, ?)`;
            const [result] = await db.query(query, [jugador1, jugador2]); //Esta linea de codigo es la que se encarga de insertar los datos en la base de datos
            return result.insertId;
        }catch (err){
            console.error("Error al crear la partida:", err);
            throw new Error("Error al crear la partida");
        }
    }

    async obtenerPartidaPorId(id) {
        try {
            const query = `SELECT * FROM partidas WHERE id = ?`;
            const [result] = await db.query(query, [id]);
            return result.length > 0 ? result[0] : null;
        } catch (err) {
            console.error("Error al obtener la partida:", err);
            throw new Error("Error al obtener la partida");
        }
    }

    async finalizarPartida(id, ganador) {
        try {
            const query = `UPDATE partidas SET ganador = ? WHERE id = ?`;
            await db.query(query, [ganador, id]);
            return true;
        } catch (err) {
            console.error("Error al finalizar la partida:", err);
            throw new Error("Error al finalizar la partida");
        }
    }

    async siguienteRonda(id) {
        try {
            const query = `UPDATE partidas SET rondas_completadas = rondas_completadas + 1 WHERE id = ?`;
            await db.query(query, [id]);
            return true;
        } catch (err) {
            console.error("Error al avanzar la ronda:", err);
            throw new Error("Error al avanzar la ronda");
        }
    }
    async verificarNumeroRondas(id) {
        try {
            const query = `SELECT rondas_completas FROM partidas WHERE id = ?`;
            const [result] = await db.query(query, [id]);
            return result.length > 0 ? result[0].ronda : null;
        } catch (err) {
            console.error("Error al obtener el numero de rondas:", err);
            throw new Error("Error al obtener el numero de rondas");
        }
    }
};


module.exports = new Partida();
