import { Banner } from "../components/Banner"
import Footer from "../components/Footer"
import { Formulario } from "../components/Formulario"
import Locales from "../components/Locales"


export function Contactos() {
  return (
    <>

      <Banner title={'| Contactanos'} />
      <Formulario />
      <Locales height={600} width={1000} />
      <Footer />

    </>
  )
}
