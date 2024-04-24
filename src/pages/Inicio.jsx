import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Certificacion from "../components/Certificacion"
import Footer from "../components/Footer"
import Ofertas from "../components/Ofertas"
import Titulo from "../components/Titulo"

import { products } from "../data/dataEstatica"


export function Inicio() {

  return (
    <div>
     
      <Carousel>
          <div>
            <img src="24_1.png" alt="Imagen 1" />
          </div>
          <div>
            <img src="bolo.png" alt="Imagen 2" />
          </div>
        </Carousel>
    

    {/**?SECCTION DE OFERTAS */}
    
      <Ofertas/>

    {/**?SECCTION DE PRODUCTOS */}
    <Titulo titulo={'PRODUCTOS'}/>

    <div className="contenedor-Card">
        {
            products.map((dato)=>
            {
                return <Card key={dato.id} dato={dato}/>
            }
            )
        }
    </div>

    {/**?SECCTION DE CERTIFICACION */}
      <Certificacion/>

    {/**?SECCTION DE TESTIMONIOS */}

    {/**?SECCTION DE MAPA(ubicacion) */}

    {/**?SECCTION DE FOOTER */}
      <Footer/>

    </div>
    
  )
}
