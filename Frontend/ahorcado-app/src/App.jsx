import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
return (
    <Router>
        <div className="flex flex-col h-screen">
            <Navbar /> 
                <main className="flex-1 overflow-y-auto p-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                </main>
        <Footer />  {/* El Footer es fijo y siempre visible */}
    </div>
    </Router>
);
};

export default App;
