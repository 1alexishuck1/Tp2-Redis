import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";

import './styles/Header.css'

const Header = () => {
  return (
    <div className="container-header">
        <Link to="/"> 
            <button className="bnt-header">Home</button>
        </Link>
        <Link to="/agregarpersonajes"> 
            <button className="bnt-header">Agregar personajes</button>
        </Link>
        <Link to="/eliminarpersonaje">
            <button className="bnt-header">Eliminar personajes</button>
        </Link>
        <Link to="/verpersonajes">
            <button className="bnt-header">Ver personajes</button>
        </Link>
        
    </div>
  )
}

export default Header;
