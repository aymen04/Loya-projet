import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Inscription from './components/Inscription/Inscription';
import VideoCapture from './components/VideoCapture/VideoCapture';
import Dashboard from './components/Dashboard/Dashboard';
import Connexion from './components/Connexion/Connexion';
import Map from './components/Map/Map';
import Pop from './components/Pop-up/Pop-up';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/VideoCapture" element={<VideoCapture />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/HelloWorld" element={<HelloWorld />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Pop" element={<Pop scannedObject={undefined} />} />


          <Route path="/" element={<Inscription />} /> // Ajouter cette ligne pour définir la route pour la page d'accueil

        </Routes>
      </div>
    </Router>
  );
}

export default App;
