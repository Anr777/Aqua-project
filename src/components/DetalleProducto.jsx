import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/dataEstatica';
import { useEffect } from 'react';

export const DetalleProducto = () => {

    const {id} = useParams();

    const productos = (id) =>{

        return products.find(producto => producto.id == id);
        
    }

    const { title, img, descripcion } = productos(id);
   
    useEffect(() => {
      
        productos(id);
    
    }, [id])
    

  return (
    <>

        <h1 className='text-2xl text-center'>{id}</h1>
        <h1>{title}</h1>
        <h1>{img}</h1>
        <h1>{descripcion}</h1>

    </>

  )
}
