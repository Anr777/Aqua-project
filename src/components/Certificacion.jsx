import React from 'react'
import Carousel from './Carousel'

const Certificacion = () => {
  return (
    <div className='Certificacion flex items-center'>
        <div className='flex flex-row absolute left-[20%]'>
                <div>
                    <div>
                        <img src="tc-logo.png" alt="tc-logo" height={'300px'} width={'300px'}/>
                    </div>
                    <div className='text-center mt-5'>
                        <span className='text-black font-bold text-xl'>BUREAU VERITAS</span>
                        <div className='Contenedor-Star'>
                            <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                            <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                            <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                            <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                            <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                        </div >
                        <h2 className='text-black font-bold text-5xl'>ISO 9001</h2>
                    </div>
                </div>
                <div className='Mini-Carousel'>
                    <Carousel> 
                        <div>
                            <h1>HOLA</h1>
                        </div>
                        <div>
                            <p>MUNDO</p>
                        </div>     
                    </Carousel>
                </div>
        </div>
    </div>
    
  )
}

export default Certificacion
