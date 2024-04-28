import { Carousel } from "../components/Carousel"
// import Carousel from "../components/Carousel"
import Certificacion from "../components/Certificacion"
import Footer from "../components/Footer"
import { IProductos } from "../components/IProductos"
import Locales from "../components/Locales"
import Ofertas from "../components/Ofertas"
import S_Contactos from "../components/S_Contactos"
import { Testimoniales } from "../components/Testimoniales"
import Titulo from "../components/Titulo"



import { carouselData, products } from "../data/dataEstatica"


export function Inicio() {

  return (
    <div className="">


      <Carousel carouselData={ carouselData } />




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
      <div className="flex">
        <Testimoniales name="Anibal Mancilla Diaz" ocupation="Ingeniero de Sistemas, Desarrollador de Amazon" 
          testimonio={`
          Es una empresa muy buena, cuenta con la calidad y el sabor gaaaaaasssssssssssssssssssssssssssssssssssss
          la puta famaaaa locooooooooooo
          `}
        />
        <Testimoniales name="Jeremy Pacheco Garcia" ocupation="Ingeniero de Sistemas, Desarrollador de Meta" 
          testimonio={`
          Es una empresa muy buena, cuenta con la calidad y el sabor gaaaaaa
          la puta famaaaa locooooooooooo
          `}
        />
        <Testimoniales name='Emma Mancilla Diaz' ocupation="Ingenieria Ambiental" />
      </div>

      {/**?SECCTION DE CONTACTOS */ }

      <S_Contactos/>
      <br />
      {/**?SECCTION DE MAPA(ubicacion) */ }

      <Locales height={600} width={1000}/>

      


      {/**?SECCTION DE FOOTER */ }
      <Footer />

    </div>

  )
}
