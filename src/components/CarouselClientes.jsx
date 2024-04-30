import { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {clientes} from '../data/dataEstatica';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselClientes= () => {

  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <Swiper 
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        autoplay={{delay:2000,disableOnInteraction:false}}
        navigation={false}
        loop={true}
      >
        {clientes.map(({img}, index) => (
          <SwiperSlide key={img} virtualIndex={index} style={{height:'200px'}}>
            <img src={img} alt="tuMama"/>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  )
}

export default CarouselClientes
