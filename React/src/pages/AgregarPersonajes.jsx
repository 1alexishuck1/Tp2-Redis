import React, { useState} from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Header from '../components/Header';

import './styles/AgregarPersonajes.css'

const AgregarPersonajes = () => {

  const [personaje, setPersonaje] = useState({
    nroEpisodio: 0,
    nombrePersonaje: ''
  })

  const handleChange = (e) =>{
    setPersonaje({ ...personaje, [e.target.name]: e.target.value });
}

  const peticionAgregar = async(e) =>{
    e.preventDefault();
    const res = await fetch('http://localhost:4000/agregarpersonajes',{
      method: 'POST',
      body: JSON.stringify(personaje),
      headers: {"Content-Type": "application/json"}
    });
    const data = await res.json();

  }

  console.log(personaje);

  return (
    <div>
        <Header />
        <div className="container-form">
          <h1>Agregar Personajes</h1>
          <form className='form-item'>
            <input type="text" placeholder='nombre del personaje' name="nombrePersonaje" onChange={handleChange} />
            <input type="text" placeholder='número de episodio' name="nroEpisodio" onChange={handleChange}/>
            <button type="button" onClick={peticionAgregar} >Agregar personaje</button>
          </form>
        </div>
    </div>
  )
}

export default AgregarPersonajes;
