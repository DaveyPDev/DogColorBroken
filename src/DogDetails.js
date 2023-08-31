import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const history = useHistory();

  const dogName = name.toLowerCase();
  const dog = dogs.find((d) => d.name.toLowerCase() === dogName);

  if (!dog) {
    history.push('/dogs');
    return null;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <h2>Facts:</h2>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
