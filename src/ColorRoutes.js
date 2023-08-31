import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorList from './ColorList';
import ColorForm from './ColorForm';

function ColorRoutes() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <Routes>
      <Route path="*" element={<ColorList />} />
      <Route path="/colors/:colorId" element={<ColorDetails colors={colors} />} />
      <Route path="/add-color" element={<ColorForm addColor={handleAdd} />} />
    </Routes>
  );
}

export default ColorRoutes;
