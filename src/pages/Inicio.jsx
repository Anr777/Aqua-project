import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import { datos } from "../data/dataEstatica"


export function Inicio() {

  return (
    <>
    <div className="Carousel">
      <Carousel/>
    </div>

    {/**?SECCTION DE OFERCAS */}
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

    {/**?SECCTION DE PRODUCTOS */}



    {/**?SECCTION DE TESTIMONIOS */}


    {/**?SECCTION DE MAPA(ubicacion) */}

    {/**?SECCTION DE FOOTER */}
    <Footer/>

    </>

  )
}
