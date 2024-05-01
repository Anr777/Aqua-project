import { Link, NavLink } from 'react-router-dom'
import { SubMenu2 } from './SubMenu2'
import { useState } from 'react'

const Navegacion = () => {

  //`${({ isActive }) => (isActive ? 'Active' : '')} Listado-nav-item`

  const [ openMenu, setOpenMenu ] = useState( false );

  function closeOpenMenu() {
    setOpenMenu( prev => !prev );
  }

  return (
    <div className='Navegation mycontainer'>
      <div className='Logo'>
        <img src="logo.png" alt="logo" width={ '270px' } height={ '60px' } />
      </div>
      <div>
        <ul className='Listado-nav'>
          <li><NavLink className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/" >Inicio</NavLink></li>
          <li><NavLink className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/nosotros" >Nosotros</NavLink></li>
          <li><div onClick={ closeOpenMenu }>
            <div className='relative ListaProduct'>
              Productos
              {
                openMenu && (
                  <SubMenu2 />
                )
              }
            </div>
          </div></li>
          <li><NavLink className={ ( { isActive } ) => ( isActive ? 'Active text-red-300' : '' ) + ' Listado-nav-item' } to="/contactos">Contactos</NavLink></li>
          {/* {
            openMenu && (
              <SubMenu2 />
            )
          } */}
        </ul>
      </div>

    </div>
  )
}

export default Navegacion
