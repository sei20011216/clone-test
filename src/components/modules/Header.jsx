import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header-nav">
      <ul className="header-nav-list">
        <Link to="/" className="header-nav-item font-hover">
          TOP
        </Link>
        <Link to="/items/concept" className="header-nav-item font-hover">
          CONCEPT
        </Link>
        <Link to="/items/menu" className="header-nav-item font-hover">
          MENU
        </Link>
        <Link to="/items/event" className="header-nav-item font-hover">
          EVENT
        </Link>
        <Link to="/items/access" className="header-nav-item font-hover">
          ACCESE
        </Link>
        <Link to="/items/contact" className="header-nav-item font-hover">
          CONTACT
        </Link>
      </ul>
    </div>
  );
};
