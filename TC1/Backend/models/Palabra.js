const db = require("../db");

class Palabra {
    async obtenerPalabraAleatoria() {
        try {
            const query = "SELECT palabra FROM palabras ORDER BY RAND() LIMIT 1";
            const [result] = await db.query(query);
            return result.length > 0 ? result[0].palabra : null;
        } catch (err) {
            console.error("Error al obtener palabra aleatoria:", err);
            throw new Error("Error al obtener palabra aleatoria");
        }
    }

    async obtenerPalabras() {
        try {
            const query = "SELECT palabra FROM palabras";
            const [result] = await db.query(query);
            return result;
        } catch (err) {
            console.error("Error al obtener palabras:", err);
            throw new Error("Error al obtener palabras");
        }
    }

}



module.exports = new Palabra();
