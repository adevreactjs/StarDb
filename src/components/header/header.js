import React from 'react';

import '../header/header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#" alt="People">People</a>
        </li>
        <li>
          <a href="#" alt="Planets">Planets</a>
        </li>
        <li>
          <a href="#" alt="Starships">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;