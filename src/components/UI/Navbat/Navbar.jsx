import React from 'react';
import { Link } from "react-router-dom";

import "../../../styles/App.css";

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar__items">
          <Link className="navbar__item" to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
    );
};

export default Navbar;