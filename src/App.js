import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetailFilter from './DogDetailFilter';
import DogData from './DogData'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dogs" />} />
        <Route path="/dogs" element={<DogList dogs={DogData} />} /> 
        <Route path="/dogs/:name" element={<DogDetailFilter dogs={DogData} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
