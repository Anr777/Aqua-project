import React from 'react'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Contenedor-Columnas'>
          <div className='Footer-About'>
            <img src="logo.png" alt="logo" />
            <p>Somos distribuidores exclusivos de diferentes marcas y contamos con más de 20 años de experiencia en el mercado nacional.</p>
            <p>www.bidonesdeagua.com</p>
          </div>
          <div className='Footer-Informacion'>
            <h5>Informacion</h5>
            <ul>
                <li><a href="#">Contáctanos</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
          </div>
          <div className='Footer-Servicios'>
            <h5>Servicios</h5>
            <ul>
                <li><a href="#">Bidones</a></li>
                <li><a href="#">Surtidores</a></li>
                <li><a href="#"></a>Equipo Completo</li>
                <li><a>Dispensadores Electricos</a></li>
            </ul>
          </div>
          <div className='Footer-Contactanos'>
            <h5>Contáctanos</h5>
            <ul>
                <li>
                    <span>Oficina</span>
                    <p>Calle Ica #312 San Andres - Ica, Péru</p>
                </li>
                <li>
                    <span>Tienda</span>
                    <p>Calle Mogote Grande #103 San Andres - Ica, Péru</p>
                </li>
                <li>+51 945 319 118 / 987 654 321</li>
                <li>ventas@aquasur.com</li>
            </ul>
          </div>
      </div>
      <div className='Footer-Copyright'>
        © 2024 Todos los derechos reservados por Aquasur
      </div>
    </footer>
  )
}

export default Footer