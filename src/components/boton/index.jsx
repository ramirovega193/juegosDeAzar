import './boton.css'

export default function Boton({onClick,children}){

    return<>
        <button onClick={onClick} className='boton'>{children}</button>
    </>
}   