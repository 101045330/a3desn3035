import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (

    <nav id="top_navigation" className="flex_row" aria-label="Main Navigation" style={{ width: 'auto' }}>


      <ul>
        <li style={{ background: 'none', backgroundColor: 'rgb(155, 116, 162)', color: 'bisque' }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/assignment1" className="tooltip"
            title="Assignment 1"
            style={{ paddingTop: '20px' }}>
            Assignment 1
          </Link>
        </li>

        <li>
          <Link to="/assignment2" className="tooltip"
            title="Assignment 2"
            style={{ paddingTop: '20px' }}>
            Assignment 2
          </Link>
        </li>

        <li>
          <Link to="/assignment3" className="tooltip"
            title="Assignment 3"
            style={{ paddingTop: '20px' }}>
            Assignment 3
          </Link>
        </li>

        <li>
          <Link to="/labs" className="tooltip"
            title="Labs"
            style={{ paddingTop: '20px' }}>
            Labs
          </Link>
        </li>


      </ul>


    </nav>

  )
}

export default Nav