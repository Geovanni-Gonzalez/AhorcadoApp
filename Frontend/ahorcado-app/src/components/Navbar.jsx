import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 w-full p-4 fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/" className="text-white text-xl font-bold">
          Ahorcado Game
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/game" className="text-white">
              Jugar
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              Acerca de
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
