import { useState } from 'react'
import './juego.css'
import Boton from '../boton'

let numeroSalidos = [];
let cartonInicial = [];

let i = 0;
while (cartonInicial.length < 15) {
    const numCarton = Math.floor(Math.random() * 91);

    if (!cartonInicial.some(carton => carton.num === numCarton)) {
        cartonInicial.push({
            id: i,
            num: numCarton,
            estado: false
        });
        i++;
    }
}

export default function Juego() {
    const [numeroSorteado, setNumeroS] = useState("Sortear!");
    const [carton, setCarton] = useState(cartonInicial);
    const [bingo,setBingo] = useState(false);


    const handleToggleClick = (index) => {
        if (numeroSalidos.includes(carton[index].num)) {
            const cartonNuevo = carton.map((item, i) =>
                i === index ? { ...item, estado: true } : item
            );
            setCarton(cartonNuevo);
        }
    };

    const sortearNumero = () => {
        const numero = Math.floor(Math.random() * 90) + 1;

        if (numeroSalidos.length === 90) {
            alert("¡Ya salieron todos los números!");
        } else if (numeroSalidos.includes(numero)) {
            sortearNumero();
        } else {
            numeroSalidos.push(numero);
            setNumeroS(numero);
        }
    };

    const sorteadosLista = numeroSalidos.map(num => <li key={num}>{num} |</li>);
    const cartoLista = carton.map((cartonItem, index) => (
        <li
            key={cartonItem.id}
            id={cartonItem.id}
            onClick={() => handleToggleClick(index)}
            className={`cartonLi ${cartonItem.estado ? 'cartonActivo' : ''}`}
        >
            {cartonItem.num}
        </li>
    ));

    function comprobarBingo(){


        const cartonLLeno = carton.every(item => item.estado)

        if(cartonLLeno){
            setBingo(!bingo)

        }else{
            alert("AUN NO GANASTE!")
        }

    }

    return (
        <>


            <div className={`contenedorBingo ${bingo == false ? 'activo' : ''}`}>
                <div className="contenedorNumero">
                    <div className="contenedorSorteo">
                        <span className='numeroSorteado'>{numeroSorteado}</span>
                        <Boton onClick={sortearNumero}>Sortear Numero</Boton>
                    </div>
                </div>
                <div className="contenedorSorteados">
                    <ul>
                        <li>Numeros Sorteados |</li>
                        {sorteadosLista}
                    </ul>
                </div>
                <div className="contenedorCarton">
                    <ul className='cartonUl'>
                        {cartoLista}
                        <li onClick={comprobarBingo} className='cartonLi cartonBingo'>BINGO!</li>
                    </ul>
                </div>
            </div>

            <div className={`contenedorResultado ${bingo ? 'activo' : ''}`}>

                <h2>BINGO GANADO!</h2>

            </div>


        </>
    );
}
