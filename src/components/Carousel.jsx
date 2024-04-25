
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Button } from './Button';

export function Carousel( { carouselData, carouselObject } ) {
  return (
    <Swiper spaceBetween={ 30 }
      centeredSlides={ true }
      autoplay={ {
        delay: 2500,
        disableOnInteraction: false,
      } }
      pagination={ {
        clickable: true,
      } }
      navigation={ carouselData && true }
      modules={ [ Autoplay, Pagination, Navigation ] }
      className="mySwiper bg-transparent"
    >
      {
        carouselData ? (carouselData.map( data => (
          <SwiperSlide key={ data.img }>
            <img src={ data.img } />
          </SwiperSlide>
        ) )) : (
          carouselObject.map( data => (
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
        )
      }
    </Swiper>
  )
}

