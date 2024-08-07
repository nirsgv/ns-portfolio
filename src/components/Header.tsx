import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='text-3xl font-bold underline header'>
      <span>header</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Link</Link>
          </li>
          <li>
            <Link to="/about">About Link</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
