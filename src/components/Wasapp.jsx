import { Link } from "react-router-dom";



export function Wasapp() {
  return (
    <Link className="fixed w-14 bottom-6 right-6 z-20" target="_blank" to={'https://api.whatsapp.com/send?phone=+51%20945319118&text=¡Hola! Jeremy,\n eres muy gosu la firme =D'}>
      <img src="/whatsapp5.png" />
      {/* <img src="/whatsapp3.png" /> */}
      {/* <img src="/whatsapp2.png" /> */}
      {/* <img src="/whatsapp.png" /> */}
    </Link>
  )
}
