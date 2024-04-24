import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*
const PrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      Anterior
    </button>
  );
  
  // Componente personalizado para el botón de flecha derecha
  const NextArrow = (props) => {

    return (

    <button {...props} className="slick-arrow slick-next">
      Siguiente
    </button>  

    ) 

  };*/
  
const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true, 
    autoplaySpeed:3000
    /*
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>*/
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="24_1.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="bolo.png" alt="Imagen 2" />
      </div>
    </Slider>
  )
}

export default Carousel
