import React from 'react';
import { Link } from 'react-router-dom';

/**
 * EnterPlayersPage component
 * Se solicita el ingreso del nombre de los 2 jugadores
 */


const EnterPlayersPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-red-100 text-center p-5 max-w-screen-lg mx-auto overflow-hidden">
        <header className="mb-6 mt-6">
            <h2 className="text-3xl font-bold text-blue-600">Ingresa los nombres de los jugadores</h2>
        </header>
    
        <section>
            <p className="text-lg mb-4">¡Diviértete completando las palabras! ¿Estás listo para jugar?</p>
            <Link to="/game">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-lg">
                Iniciar Juego
            </button>
            </Link>
        </section>
        </div>
    );
    }