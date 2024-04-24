import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Navegacion from "../components/Navegacion"


export function Inicio() {

  const datos = [
    {
      id:1,
      title: 'Anibal',
      descripcion: 'Mancilla Diaz',
      img:'logo.png',

    },
    {
      id:2,
      title: 'Jeremy',
      descripcion: 'Pacheco Garcia',
      img:'bolo.png',
      
    },
    {
      id:3,
      title: 'Jair',
      descripcion: 'Pacheco Garcia',
      img:'24_1.png',
      
    }
]


  return (
    <>
    <div className="Carousel">
      <Carousel/>
    </div>

    <div className="contenedor-Titulo">
      <h1 className="Titulo">¡OFERTAS!</h1>
    </div>

    <div className="contenedor-Card">
      {

        datos.map((dato)=>
          {

            return <Card key={dato.id} dato={dato}/>

          }
          
        )
      }
    </div>

    <Footer/>

    </>

  )
}
