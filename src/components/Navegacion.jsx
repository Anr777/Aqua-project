import { NavLink } from 'react-router-dom'

const Navegacion = () => {

  //`${({ isActive }) => (isActive ? 'Active' : '')} Listado-nav-item`

  return (
    <div className='Navegation mycontainer'>
        <div className='Logo'>
            <img src="logo.png" alt="logo" width={'270px'} height={'60px'}/>
        </div>
        <div>
          <ul className='Listado-nav'>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : '') + ' Listado-nav-item'} to="/" >Inicio</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : '') + ' Listado-nav-item'} to="/nosotros" >Nosotros</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active' : '') + ' Listado-nav-item'} to="/productos">Producto</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'Active text-red-300' : '') + ' Listado-nav-item'} to="/contactos">Contactos</NavLink></li>
            </ul>
        </div>  
    </div>
  )
}

export default Navegacion
