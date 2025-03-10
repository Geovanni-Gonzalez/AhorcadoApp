const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

export const getPalabra = async () => {
try {
    const response = await fetch(`${BASE_URL}/palabra`);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
        throw new Error('Error al obtener la palabra');
}catch (error) {
        console.error('Error:', error);
        throw error;
}}

