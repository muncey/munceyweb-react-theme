import React from 'react';
import { Link } from "react-router-dom";
/**
 * <Navbar />
 * 
 */
export const Navbar = () => {
  return (
      <nav>
        <ul className="nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/users">Authors</Link></li>
        </ul>
      </nav>
  )  
}
