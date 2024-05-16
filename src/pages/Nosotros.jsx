import { Banner } from "../components/Banner"
import { CardImgNosotros } from "../components/CardImgNosotros"
import Footer from "../components/Footer"
import Locales from "../components/Locales"
import S_Contactos from "../components/S_Contactos"
import { S_Nosotros } from "../components/S_Nosotros"
import Titulo from "../components/Titulo"
import { imgNosotros, testimoniosClientes } from "../data/dataEstatica"
import CarouselClientes from "../components/CarouselClientes"
import { ContainerTestimoniales } from "../components/ContainerTestimoniales"




export function Nosotros() {
  return (
    <>
      <Banner title={ '| Quienes Somos' } />

      {/**SECTION NOSOTROS */ }

      <S_Nosotros />

      {/**SECTION Nuestra Empresa(imagenes) */ }
      <Titulo titulo={ 'Nuestra Empresa' } />

      <div className="flex flex-wrap mycontainer justify-center items-center gap-8">
        {
          imgNosotros.map( data => (
            <CardImgNosotros key={ data.id } { ...data } />
          ) )
        }

      </div>

      {/**SECTION Testimonio */ }
      <Titulo titulo={ 'Ellos confian en nosotros' } />
      {/* flex max-sm:flex-col max-sm:py-9 max-sm:px-3*/}
      {/* <div className="flex max-sm:flex-col items-center max-sm:py-9 max-sm:px-3 max-lg:flex-wrap"> */}
        {/*COLOCAR EN UN MAP Y GUARDAR LOS DATOS EN UN OBJETO*/}

        <ContainerTestimoniales data={ testimoniosClientes } />
        {/* <Testimoniales name="Anibal Mancilla Diaz" ocupation="Ingeniero de Sistemas, Desarrollador de Amazon"
          testimonio={ `
          Es una empresa muy buena, cuenta con la calidad y el sabor gaaaaaasssssssssssssssssssssssssssssssssssss
          la puta famaaaa locooooooooooo
          `}
        />
        <Testimoniales name="Jeremy Pacheco Garcia" ocupation="Ingeniero de Sistemas, Desarrollador de Meta"
          testimonio={ `
          Es una empresa muy buena, cuuenta con la calidad y el sabor gaaaaaa
          la puta famaaaa locooooooooooo
          `} 
        />  
        <Testimoniales name='Emma Mancilla Diaz' ocupation="Ingenieria Ambiental"/> */}
 
      {/* </div> */}

      {/**SECTION Carousel de nuestros clientes */ }
      <Titulo titulo={ 'Nuestros Clientes' } />

      <CarouselClientes/>

      {/**?SECCTION DE CONTACTOS */ }

      <S_Contactos />
      
      {/**?SECCTION DE MAPA(ubicacion) */ }

      <Locales height={ 600 } width={ 1000 } />

      <Footer />

    </>
  )
}
