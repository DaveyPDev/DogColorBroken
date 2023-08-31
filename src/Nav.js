import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => {
  const dogLinks = dogs.map((dog) => (
    <li key={dog.name}>
      <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/dogs">
            Home
          </NavLink>
        </li>
        {dogLinks}
      </ul>
    </nav>
  );
};

export default Nav;
