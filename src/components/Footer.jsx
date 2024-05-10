import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Contenedor-Columnas'>
          <div className='Footer-About'>
            <img src="logo.png" alt="logo" />
            <p className="pt-4">Somos distribuidores exclusivos de diferentes marcas y contamos con más de 20 años de experiencia en el mercado nacional.</p>
            <p className="leading-9 pt-5">www.bidonesdeagua.com</p>
          </div>
          <div className='Footer-Informacion'>
            <h5>Informacion</h5>
            <ul>
                <li><Link to='/contactos'>Contáctanos</Link></li>
                <li><Link to='/nosotros'>Nosotros</Link></li>
            </ul>
          </div>
          <div className='Footer-Servicios'>
            <h5>Servicios</h5>
            <ul>
                <li><Link>Bidones</Link></li>
                <li><Link>Surtidores</Link></li>
                <li><Link>Equipo Completo</Link></li>
                <li><Link>Dispensadores Electricos</Link></li>
            </ul>
          </div>
          <div className='Footer-Contactanos'>
            <h5>Contáctanos</h5>
            <ul>
                <li>
                    <h5>Oficina:</h5>
                    <p>Calle Ica #312 San Andres - Ica, Péru</p>
                </li>
                <li>
                    <h5>Tienda:</h5>
                    <p>Calle Mogote Grande #103 San Andres - Ica, Péru</p>
                </li>
                <li><p>+51 945 319 118 / 987 654 321</p></li>
                <li><p>ventas@aquasur.com</p></li>
            </ul>
          </div>
      </div>
      <div className='Footer-Copyright'>
        <p className="text-center">© 2024 Todos los derechos reservados por Aquasur</p>
      </div>
    </footer>
  )
}

export default Footer
