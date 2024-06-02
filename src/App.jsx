import { useState } from 'react'
import './App.css'
import Juego from './components/juego'
import Boton from './components/boton'
import Rifa from './components/rifa/index'
function App() {

  const [bingoActive, setBingoActive] = useState(false)
  const [rifa,setRifa] = useState(false)


  function jugarBingo(){
    setBingoActive(true)
    setRifa(false)
  }
  function jugarRifa(){
    setRifa(true)
    setBingoActive(false)
  }


  return (
    <>
      <div className="contenedor">
          <h1>Juegos de azar</h1>
          <Boton onClick={jugarBingo}>Jugar bingo</Boton>
          <Boton onClick={jugarRifa}>Jugar rifa</Boton>
      </div>
      <div className={`contenedorJuego ${bingoActive ? 'activo' : '' }`}>
      <Juego />
      </div>
      <div className={`contenedorJuego ${rifa ? 'activo' : '' }`}>
      <Rifa />
      </div>
    </>
  )
}

export default App
