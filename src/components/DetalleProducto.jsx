import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/dataEstatica';
import { useEffect } from 'react';
import { Button } from './Button';

export const DetalleProducto = () => {

    const {id} = useParams();

    const productos = (id) =>{

        return products.find(producto => producto.id == id);
        
    }

    const { title, img, descripcion,contenido } = productos(id);
   
    useEffect(() => {
      
        productos(id);
    
    }, [id])
    

  return (
    <>

        <div className='detalle-producto'>
          <div className='img-producto'>
            <img src={img} alt={title}/>
          </div>
          <div className='info-producto'>
            <div className='mb-5'>
                <span className='uppercase'>{contenido}</span>
                <h1 className='font-bold'>{title}</h1>
                <div className='vendido-por' >
                  <p>Vendido y despachado por:</p>
                  <div>
                    <span>marca</span>
                    <span>nombre</span>
                  </div>
                </div>
                <div className='precios'>
                    <div><p>Precio regular: </p> <span>S/.10.00</span></div>
                    <div><p>Precio con descuento: </p> <span>S/.5.00</span></div>
                </div>
                <div className='descripcion'>
                    {descripcion}
                </div>
                          <div className='metodo-pago'>
                <div>
                  YAPE
                </div>
                <div>
                  PLIN
                </div>
                <div>
                  TRANSFERENCIAS
                </div>
              </div>
            </div>
          <div className='flex justify-center pb-5'>
            <Button title='Agregar al carrito' color={'text-white'} background={'bg-blue-500'} text={'p-4'} clases={'hover: hover:bg-blue-700 text-white'}/>
          </div>
          </div>
        </div>

    </>

  )
}
