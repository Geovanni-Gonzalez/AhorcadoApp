const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';


export const crearPartida = async (jugador1, jugador2) => {
    try {
        const response = await fetch(`${BASE_URL}/partida`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jugador1, jugador2 }) 
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al crear la partida');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const obtenerPartidaPorId = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/partida/${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al obtener la partida');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const finalizarPartida = async (id, ganador) => {
    try {
        const response = await fetch(`${BASE_URL}/partida/${id}/finalizar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ganador })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al finalizar la partida');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const siguienteRonda = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/partida/${id}/siguiente`, {
            method: 'PUT'
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al avanzar la ronda');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const verificarNumeroRondas = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/partida/${id}/rondas`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error al obtener el numero de rondas');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}




