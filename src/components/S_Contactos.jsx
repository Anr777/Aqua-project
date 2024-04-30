import { Button } from './Button'

const S_Contactos = () => {
  return (
      <div className='Contactos'>
          <div className='flex flex-row justify-end gap-4'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-white text-5xl font-bold'>Servicio Delivery Gratuito</h1>
              <p className='text-white '>Hasta su domicilio o dirección de oficina en zonas de cobertura</p>
              <span className='inline-block text-center'>
                <Button title='CONTACTANOS' background={'bg-white'} clases={'border border-blue-600 rounded-2xl hover:bg-blue-500 hover:text-white '} />
              </span>
            </div>
            <div>
              <img src="s.png" alt="bidononcio" />
            </div>
          </div>
      </div>    
  )
}

export default S_Contactos
