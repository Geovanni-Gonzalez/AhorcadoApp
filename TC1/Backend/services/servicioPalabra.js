const Palabra = require("../models/Palabra");

async function obtenerPalabraAleatoria(){
    return await Palabra.obtenerPalabraAleatoria();
}


module.exports = { obtenerPalabraAleatoria };