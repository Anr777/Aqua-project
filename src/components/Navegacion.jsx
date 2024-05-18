import { Link, NavLink } from 'react-router-dom';
import { SubMenu2 } from './SubMenu2';
import { useState } from 'react';
import { BurgerButton } from './BurgerButton';

const Navegacion = () => {

  const [ clicked, setClicked ] = useState( false );
  const handleClick = ()=>{
    
    setClicked(!clicked);
    
  }

  return (
    <div className='Navegation lg:px-[50px] md:px-[25px] max-md:px-[25px]'  onMouseLeave={ () => setOpenMenu(false) }>
      <div className='Logo'>
        <Link to='/'>
          <img src="logo.png" alt="logo" width={ '270px' } height={ '60px' } />
        </Link>
      </div>
      
      <div className={`links ${clicked ? 'activaBurguer' : ''}`}>
          <NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/" >Inicio</NavLink>

          <NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/nosotros" >Nosotros</NavLink>

          <NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active' : '' ) + ' Listado-nav-item' } to="/productos" >Productos</NavLink>

          <NavLink onClick={ () => setOpenMenu( false ) } className={ ( { isActive } ) => ( isActive ? 'Active'  : '' ) + ' Listado-nav-item' } to="/contactos">Contactos</NavLink>
      </div>

      <div className="Burger">
          <BurgerButton clicked={clicked} handleClick={handleClick}/>
      </div>
  </div>
  )
}

/*
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
            </div>


<button className="text-black focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
</button>


<nav class="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-lg z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="#" class="text-xl font-bold">Logo</a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">About</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Services</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contact</a>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <button class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

*/

export default Navegacion
