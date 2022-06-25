import React, { useState, useEffect } from 'react';
import Header from '../components/Header'

const EliminarPersonaje = () => {

    const [nroEp, setNroEp] = useState()
    const [nomPers, setnomPers] = useState()
    
    const peticionEliminar = async(nroEpisodio, nombrePersonaje) =>{
        await fetch(`http://localhost:4000/eliminarpersonaje/${nroEp}/${nomPers}`,{
            method: 'DELETE'
        })

    } 

    console.log(nroEp);
    console.log(nomPers);



  return (
    <>
        <Header/>
        <div>
            <div>
                <h1>Eliminar un personaje</h1>
            </div>
            <div>
                <input type="text" name="nroEpisodio" placeholder='Número de episodio' onChange={(e)=>{setNroEp(e.target.value)}}/>
                <input type="text" name="nombrePersonaje" placeholder='Nombre del personaje' onChange={(e)=>{setnomPers(e.target.value)}}/>
                <button onClick={peticionEliminar}>Eliminar personaje</button>
            </div>
        </div>
    </>
  )
}

export default EliminarPersonaje