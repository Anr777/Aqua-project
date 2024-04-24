import React from 'react'
import { datos } from '../data/dataEstatica'
import Card from './Card'
import Titulo from './Titulo'

const Ofertas = () => {

  return (
    <div className='Ofertas'>

      <Titulo titulo={'OFERTAS'}/>

      <div className="contenedor-Card">
          {
              datos.map((dato)=>
              {
                  return <Card key={dato.id} dato={dato}/>
              }
              )
          }
      </div>
    </div>
  )
}

export default Ofertas
