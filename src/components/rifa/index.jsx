import './rifa.css'
import { useState } from 'react'
import Boton from '../boton'


const ganadores = []

export default function Rifa(){



    const [maximo, setMaximo] = useState(100)
    const [minimo, setMinimo] = useState(1)
    const [ganador, setGanador] = useState(" ...")


    function cambiarMaximo(event){
        
        setMaximo(parseInt(event.target.value))

    }
    
    function cambiarMinimo(event){
        setMinimo(parseInt(event.target.value))
    }

    function determinarGanador(){
        
        const Ganador = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
        setGanador(Ganador);
        ganadores.push(Ganador)

    }


    const listaGanadores = ganadores.map(ganadores => <li>{ganadores}</li>)
    

    return<>
    
    
        <h2 className='tituloSorteo'>EL GANADOR ES {ganador}</h2>

        <div className="contenedorInputs">
            <div className="contenedorInput">
                <label htmlFor="0">Establecer Minimo</label>
                <br />
                <input className='inputNumber' placeholder='Por defecto 1' id='0' onChange={cambiarMinimo}/>
            </div>
            <div className="contenedorInput">
                <label htmlFor="1">Establecer Maximo</label>
                <br />
                <input className='inputNumber' placeholder='Por defecto 100' id='1' onChange={cambiarMaximo}/>
            </div>
        </div>

        <div className="contenedorBoton">
                <Boton onClick={determinarGanador}>Sortear Rifa</Boton>
        </div>

        <div className="contenedorGanadores">
            <h2>Ganadores Anteriores</h2>
            <ul>
                {listaGanadores}
            </ul>
        </div>
        
    </>

}