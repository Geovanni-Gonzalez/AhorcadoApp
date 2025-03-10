const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

export const crearRonda = async (partidaId, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial) => {
    try {
        const response = await fetch(`${BASE_URL}/ronda`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ partidaId, numeroRonda, palabraJugador1, palabraJugador2, turnoInicial })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al crear la ronda');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const obtenerRondasPorPartida = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/ronda/partida/${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al obtener las rondas');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const alternarTurno = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/ronda/${id}/turno`, {
            method: 'PUT'
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al alternar el turno');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const verificarLetra = async (id, letra) => {
    try {
        const response = await fetch(`${BASE_URL}/ronda/${id}/verificar/${letra}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al verificar la letra');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}