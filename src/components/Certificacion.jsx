import { SwiperSlide } from "swiper/react"
import { dataCertificaciones } from "../data/dataEstatica"
import { Carousel } from "./Carousel"
import { Star } from "./Star"
import { Button } from "./Button"

const Certificacion = () => {
  return (
        <div className='Certificacion flex items-center '>
            <div className='flex flex-row absolute left-[15%]'>
                    <div>
                        <div>
                            <img src="tc-logo.png" alt="tc-logo" height={'300px'} width={'300px'}/>
                        </div>
                        <div className='text-center mt-5'>
                            <span className='text-black font-bold text-xl'>BUREAU VERITAS</span>
                            <div className='Contenedor-Star'>
                                {/* <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                                <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                                <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                                <img src="star.svg" alt="" height={'20px'} width={'20px'}/>
                                <img src="star.svg" alt="" height={'20px'} width={'20px'}/> */}
                                <Star numStar={5} height={'20px'} width={'20px'} />
                            </div >
                            <h2 className='text-black font-bold text-5xl'>ISO 9001</h2>
                        </div>
                    </div>
                    <div className='Mini-Carousel'>
                        <Carousel>
                            {
                                dataCertificaciones.map( data => (
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
                            }
                        </Carousel>
                    </div>
            </div>
        </div>
    
  )
}

export default Certificacion
