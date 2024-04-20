import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
  return (
    <div className='Navegation'>
        <div className='Logo'>
            <img src="logo.png" alt="logo" />
        </div>
        <div>
            <ul className='Listado-nav'>
                <li><Link className='Listado-nav-item' to="/" >Inicio</Link></li>
                <li><Link className='Listado-nav-item' to="/nosotros" >Nosotros</Link></li>
                <li><Link className='Listado-nav-item' to="/productos">Producto</Link></li>
                <li><Link className='Listado-nav-item' to="/contactos">Contactos</Link></li>
            </ul>
            <div></div>
        </div>  
    </div>
  )
}

export default Navegacion
