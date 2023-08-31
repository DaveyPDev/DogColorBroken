import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetailFilter from './DogDetailFilter';

function App({ dogs }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetailFilter dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
