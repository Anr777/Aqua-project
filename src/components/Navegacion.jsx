import { Link, NavLink } from 'react-router-dom';
import { SubMenu2 } from './SubMenu2';
import { useState } from 'react';

const Navegacion = () => {

  const [ openMenu, setOpenMenu ] = useState( false );

  return (
    <div className='Navegation mycontainer'  onMouseLeave={ () => setOpenMenu(false) }>
      <div className='Logo'>
        <Link to='/'>
          <img src="logo.png" alt="logo" width={ '270px' } height={ '60px' } />
        </Link>
      </div>
      <div>
        <ul className='Listado-nav'>
          <li><NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/" >Inicio</NavLink></li>
          <li><NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/nosotros" >Nosotros</NavLink></li>
          <li>
            <div
              onMouseEnter={ () => setOpenMenu(true) }
            >
              <div className='relative ListaProduct' onMouseEnter={ () => setOpenMenu(true) }>
                Productos
                {
                  openMenu && (
                    <SubMenu2 onMouseLeave={ () => setOpenMenu(false) }  />
                  )
                }
              </div>
            </div></li>
          <li><NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active text-red-300' : '' ) + ' Listado-nav-item' } to="/contactos">Contactos</NavLink></li>
        </ul>
      </div>

    </div>
  )
}

export default Navegacion
