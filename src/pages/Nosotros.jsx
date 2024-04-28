import { Banner } from "../components/Banner"
import { CardImgNosotros } from "../components/CardImgNosotros"
import Footer from "../components/Footer"
import Locales from "../components/Locales"
import S_Contactos from "../components/S_Contactos"
import { S_Nosotros } from "../components/S_Nosotros"
import { Testimoniales } from "../components/Testimoniales"
import Titulo from "../components/Titulo"
import { imgNosotros } from "../data/dataEstatica"




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
      <div className="flex">
        <Testimoniales name="Anibal Mancilla Diaz" ocupation="Ingeniero de Sistemas, Desarrollador de Amazon"
          testimonio={ `
          Es una empresa muy buena, cuenta con la calidad y el sabor gaaaaaasssssssssssssssssssssssssssssssssssss
          la puta famaaaa locooooooooooo
          `}
        />
        <Testimoniales name="Jeremy Pacheco Garcia" ocupation="Ingeniero de Sistemas, Desarrollador de Meta"
          testimonio={ `
          Es una empresa muy buena, cuenta con la calidad y el sabor gaaaaaa
          la puta famaaaa locooooooooooo
          `}
        />
        <Testimoniales name='Emma Mancilla Diaz' ocupation="Ingenieria Ambiental" />
      </div>

      {/**SECTION Carousel de nuestros clientes */ }
      <Titulo titulo={ 'Nuestros Clientes' } />

      {/**?SECCTION DE CONTACTOS */ }

      <S_Contactos />
      <br />
      {/**?SECCTION DE MAPA(ubicacion) */ }

      <Locales height={ 600 } width={ 1000 } />

      <Footer />

    </>
  )
}
