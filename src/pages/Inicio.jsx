import { SwiperSlide } from "swiper/react"
import { Carousel } from "../components/Carousel"
// import Carousel from "../components/Carousel"
import Certificacion from "../components/Certificacion"
import Footer from "../components/Footer"
import { IProductos } from "../components/IProductos"
import Locales from "../components/Locales"
import Ofertas from "../components/Ofertas"
import S_Contactos from "../components/S_Contactos"
// import { Testimoniales } from "../components/Testimoniales"
import {testimoniosClientes } from "../data/dataEstatica"
import { ContainerTestimoniales } from "../components/ContainerTestimoniales"
import Titulo from "../components/Titulo"
import { carouselData, products } from "../data/dataEstatica"
import { Button } from "../components/Button"
import { Outlet } from "react-router-dom"


export function Inicio() {

  return (
    
      <div className="overflow-x-hidden pt-[130px]">
        <Carousel carouselData={ carouselData }>
          {carouselData ? (carouselData.map( data => (
            <SwiperSlide key={ data.img }>
              <img src={ data.img } />
            </SwiperSlide>
          ) )) : (
            carouselData.map( data => (
              <SwiperSlide key={data.id}> 
                <div className='bg-red'>
                  <div  className='flex flex-col text-black gap-3'>
                    <h1 className='font-bold text-xl'>{data.title }</h1>
                    <p className='font-extralight Line-height'>{ data.description }</p>
                    <Button title={ data.button } 
                      clases={'border border-blue-600 rounded-2xl hover:bg-blue-500 hover:text-white'} 
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
          </Carousel>

        {/**?SECCTION DE OFERTAS */ }

        <Ofertas title={'!Ofertas!'} />

        {/**?SECCTION DE PRODUCTOS */ }
        <Titulo titulo={ 'Nuestros Productos' } />

        <IProductos data={ products } />

        {/**?SECCTION DE CERTIFICACION */ }

        <div style={{ maxWidth: 'none', marginLeft: 0, marginRight: 0 }}>
          <Certificacion />
        </div>

        {/**?SECCTION DE TESTIMONIOS */ }
        <Titulo titulo={'Ellos Confian en Nosotros'} />

        <ContainerTestimoniales data={ testimoniosClientes } />

        {/**?SECCTION DE CONTACTOS */ }

        <S_Contactos/>
        <br />
        {/**?SECCTION DE MAPA(ubicacion) */ }

        <Locales height={600} width={1000}/>

        {/**?SECCTION DE FOOTER */ }
        
        <Footer/>

      </div>

    
  )
}
