import { request } from 'express';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearPartida } from '../services/Partida';



export async function action(params) {
  let formData = await request.formData();
  let { _action, jugador1, jugador2 } = Object.fromEntries(formData);

  if (_action === 'crearPartida') {
    try {
      const partidaResponse = await crearPartida(jugador1, jugador2);
      if (partidaResponse.success) {
        return { 
          redirect: true,
          message: partidaResponse.message,
          idPartida: partidaResponse.id,
        };
      }
      
      return {
        redirect: false,
        message: partidaResponse.message,
      };
    } catch (error) {
      return {
        redirect: false,
        message: 'Error al crear la partida',
      };
    }
}};




const PlayerForm = () => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    if (player1.trim() === '' || player2.trim() === '') {
        alert('Por favor, ingresa los nombres de ambos jugadores.');
        return;
    }

    // Enviar nombres a la base de datos
    try {
      const response = await fetch('http://localhost:3000/save-players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player1, player2 })
      });

      if (response.ok) {
        navigate('/game'); // Ir al juego después de guardar
      } else {
        alert('Error al guardar los nombres.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Ingrese los nombres</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg w-80 text-center" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Jugador 1" 
          className="border p-2 w-full mb-3 rounded" 
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Jugador 2" 
          className="border p-2 w-full mb-3 rounded" 
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Comenzar Juego
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
