import React from 'react';
import { Link } from 'react-router-dom';

const Slidebar = () => {
  return (
    <section className="slidebar">
      <h1 className="slidebar-header">CATEGORY</h1>
      <div className="slidebar-nav">
        <ul className="slidebar-nav-list">
          <Link to="/">
            <span className="slidebar-nav-item font-hover">TOP</span>
          </Link>
          <Link to="/items/concept">
            <span className="slidebar-nav-item font-hover">CONCEPT</span>
          </Link>
          <Link to="/items/menu">
            <span className="slidebar-nav-item font-hover">MENU</span>
          </Link>
          <Link to="/items/event">
            <span className="slidebar-nav-item font-hover">EVENT</span>
          </Link>
          <Link to="/items/access">
            <span className="slidebar-nav-item font-hover">ACCESE</span>
          </Link>
          <Link to="/items/contact">
            <span className="slidebar-nav-item font-hover">CONTACT</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Slidebar;
