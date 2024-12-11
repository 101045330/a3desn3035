import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="top_navigation1" className="flex_row" aria-label="Main Navigation" style={{ width: 'auto', padding: '1em' }}>
      <ul aria-label="Main Navigation Links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/assignment01" className="labs-link" title="Assignment 1">
            Assignment 1
          </Link>
        </li>
        <li>
          <Link to="/assignment02" className="labs-link" title="Assignment 2">
            Assignment 2
          </Link>
        </li>
        <li>
          <Link to="/assignment03" className="labs-link" title="Assignment 3">
            Assignment 3
          </Link>
        </li>
        <li>
          <Link to="/labs"  title="Labs" className="labs-link">
            Labs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;