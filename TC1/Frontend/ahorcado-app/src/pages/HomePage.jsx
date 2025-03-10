import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen bg-white text-center p-5">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-grow space-y-8">
        <header>
          <h2 className="text-4xl font-bold text-blue-600 leading-tight">
            Bienvenido al Juego de Ahorcado
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            ¡Diviértete completando las palabras y desafía tus habilidades!
          </p>
        </header>

        <section className="flex flex-col items-center space-y-6">
          <p className="text-lg text-gray-700 mb-4">
            ¿Estás listo para jugar? Haz clic en el botón a continuación para comenzar.
          </p>
          <Link to="/player-form">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-xl shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
              Iniciar Juego
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
