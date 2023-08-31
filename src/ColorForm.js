import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ColorForm({ addColor }) {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState();
  const navigate = useNavigate();

  const handleColorNameChange = (event) => {
    setColorName(event.target.value);
  };

  const handleColorHexChange = (event) => {
    setColorHex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = {
      name: colorName,
      hex: colorHex,
    };
    addColor(newColor);
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="colorName">Color Name:</label>
        <input type="text" id="colorName" value={colorName} onChange={handleColorNameChange} />
      </div>
      <div>
        <label htmlFor="colorHex">Color Hex:</label>
        <input type="text" id="colorHex" value={colorHex} onChange={handleColorHexChange} />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default ColorForm;
