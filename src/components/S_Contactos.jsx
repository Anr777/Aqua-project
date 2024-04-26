import React from 'react'
import { Button } from './Button'

const S_Contactos = () => {
  return (
      <div className='Contactos relative'>
          <div className='flex flex-row absolute right-11'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-white text-5xl font-bold'>Servicio Delivery Gratuito</h1>
              <p className='text-white'>Hasta su domicilio o dirección de oficina en zonas de cobertura</p>
              <Button/>
            </div>
            <div>
              <img src="s.png" alt="bidononcio" />
            </div>
          </div>
      </div>    
  )
}

export default S_Contactos
