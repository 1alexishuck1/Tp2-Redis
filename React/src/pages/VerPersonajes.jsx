import React, { useState} from 'react';
import Header from '../components/Header';
import './styles/VerPersonaje.css';


const VerPersonajes = () => {

    const peticionPersonajes = async () =>{
        const result = await fetch(`http://localhost:4000/listarpersonajes/${nroEp}`);
        const data = await result.json()
        setEpisodios(data)
    }

    const [episodios, setEpisodios] = useState();
    const [nroEp, setNroEp] = useState();

    if (nroEp){
        console.log(episodios);
    }

    console.log(nroEp);

    return(
        <>
            <Header />
            <div className='container-principal'>
                <div className='item-container'>
                    <h1>Ingrese un capítulo</h1>
                    <input placeholder='Capítulo' type="text" name="nroEp" onChange={(e)=>{setNroEp(e.target.value)}}/>
                    <button onClick={peticionPersonajes}>Buscar</button>
                    <br />
                </div>
                { 
                    episodios && 
                            <div className="container-personajes">
                                    <h2>Personajes que aparecen en el episodio {nroEp}</h2>
                                <ul>
                                        {
                                        episodios.map( (episodio) =>{
                                            return(
                                                <>
                                                    <li key={episodio.id}> - {episodio}</li>
                                                </>
                                            )}
                                        )}
                                        <br />
                                </ul>
                            </div>
                            
                        
                }
            </div>
        </>
    )
}

export default VerPersonajes